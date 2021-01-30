var driver = require("./../database");

exports.getBooks = async (req, res, next) => {
  var query = `MATCH (n:book) RETURN n`;
  if (req.query.bookName) {
    query = `MATCH (n:book{name:${req.query.bookName}}) RETURN n`;
  }
  var session = driver.session();
  session
    .run(query, {})
    .then((result) => {
      var booklist = [];
      result.records.forEach((record) => {
        booklist.push(
          record._fields[0].properties.author,
          record._fields[0].properties.chapters,
          record._fields[0].properties.description,
          record._fields[0].properties.price,
          record._fields[0].properties.publication,
          record._fields[0].properties.name
        );
      });
      res.send({ data: booklist });
    })
    .catch((err) => {
      next(err);
    });
};

exports.addBooks = async (req, res, next) => {
  var session = driver.session();
  var query = `CREATE (n:book{
        name:"${req.body.bookName}",
        author:"${req.body.author}",
        chapters:${req.body.chapters},
        description:"${req.body.description}",
        price:${req.body.price},
        genre:"${req.body.genre}",
        publication:"${req.body.publication}"
    }) `;

  session
    .run(query, {})
    .then(() => {
      res.send({ message: "Book added succesfully" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.addchapters = async (req, res, next) => {
  var session = driver.session();
  query = `MERGE (n:title{
       titleNo:${req.body.titleNo},titleName:"${req.body.titleName[i]}"
   })-[r:belongsto{}]-(m:book{name:"${req.body.bookName}"})`;
  session
    .run(query, {})
    .then(() => {
      res.send({ message: "Book Titles added sucesfully" });
    })
    .catch((err) => {
      next(err);
    });
};
