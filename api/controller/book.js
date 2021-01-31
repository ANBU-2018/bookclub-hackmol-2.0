var driver = require("./../database");

exports.getBooks = async (req, res, next) => {
  var query = `MATCH (n:book) RETURN n`;
  if (req.query.bookName) {
    query = `MATCH (n:book{name:"${req.query.bookName}"}) RETURN n`;
  } else if (req.query.userName) {
    query = `MATCH (n:people{username:"${req.query.userName}"})-[r:prefers]->(m:genre)<-[q:fallsunder]-(o:book) return distinct(o) `;
  }
  var session = driver.session();
  const result = await session.run(query, {})
  var i = 0;
  var booklist = [];
  result.records.forEach(async (record) => {
    booklist.push(record._fields[0].properties);
    var genrelist = [];
    var session2 = driver.session();
    const result2 = await session2
      .run(
        `MATCH (n:book{name:$bookName})-[r:fallsunder]->(m1:genre) RETURN m1`,
        {
          bookName: booklist[i].name,
        }
      )
    result2.records.forEach(async (record) => {
      genrelist.push(record._fields[0].properties.name);
      await session2.close();
    });
    booklist[i].genre = genrelist;
    i++;
  })
  await session.close();
  console.log(booklist)
  setTimeout(() => { res.send({ data: booklist }); }, [4000])
};
function linkGenre(bookName, genre, next) {
  var session = driver.session();
  var query = `MATCH (n:book{name:"${bookName}"}) MATCH (m:genre{name:"${genre}"}) MERGE (n)-[r:fallsunder]->(m) return n,m; `;
  session
    .run(query, {})
    .then(() => { })
    .catch((err) => {
      next(err);
    });
}
exports.addBooks = async (req, res, next) => {
  var session = driver.session();
  var query = `MERGE (n:book{
        name:"${req.body.bookName}",
        author:"${req.body.author}",
        chapters:${req.body.chapters},
        description:"${req.body.description}",
        price:${req.body.price},
        publication:"${req.body.publication}",
        photo:"${req.body.photo}"
    }) `;

  session
    .run(query, {})
    .then(() => {
      for (var i = 0; i < req.body.genre.length; i++) {
        linkGenre(req.body.bookName, req.body.genre[i], next);
      }
      res.send({ message: "Book added succesfully" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.addchapters = async (req, res, next) => {
  var session = driver.session();
  query = `MATCH (n:book{name:"${req.body.bookName}"})
   MERGE (m:title{titleNo:"${req.body.titleNo}",titleName:"${req.body.titleName}"})-[r:belongsto{}]->(n) return n`;
  session
    .run(query, {})
    .then(async () => {
      res.send({ message: "Book Chapter added sucesfully" });
      await session.close();
    })
    .catch((err) => {
      next(err);
    });
};

exports.getchapters = async (req, res, next) => {
  var session = driver.session();
  var chapters = [];
  query = `MATCH (n:title)-[r:belongsto{}]->(:book{name:"${req.query.bookName}"}) return n`;
  session
    .run(query, {})
    .then(async (result) => {
      result.records.forEach((record) => {
        chapters.push(record._fields[0].properties);
      });
      res.send({ data: chapters });
      await session.close();
    })
    .catch((err) => {
      next(err);
    });
};

exports.addgenre = async (req, res, next) => {
  for (var i = 0; i < req.body.genre.length; i++) {
    var session = driver.session();
    var query = `MERGE (n:genre{name:$genre})`;
    session
      .run(query, {
        genre: req.body.genre[i],
      })
      .then(async () => {
        await session.close();
      })
      .catch((err) => {
        next(err);
      });
  }
  res.send("genre added");
};
