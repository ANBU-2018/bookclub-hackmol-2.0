var driver = require("./../database");

exports.getComments = async (req, res, next) => {
  var query;
  if (req.query.bookName) {
    query = `MATCH (n:book{name:"${req.query.bookName}"}) RETURN n`;
  } else if (req.query.chapter) {
    query = `MATCH (n:book{name:"${req.query.bookName}"}) RETURN n`;
  }

  var session = driver.session();
  session
    .run(query, {})
    .then(async (result) => {
      var i = 0;
      var booklist = [];
      result.records.forEach(async (record) => {
        booklist.push(record._fields[0].properties);
        var genrelist = [];
        var session2 = driver.session();
        await session2
          .run(
            `MATCH (n:book{name:$bookName})-[r:fallsunder]->(m:genre) RETURN m`,
            {
              bookName: booklist[i].name,
            }
          )
          .then((result) => {
            console.log("result.records[1]._fields[0]");
            result.records.forEach((record) => {
              genrelist.push(record._fields[0].properties.name);
              session2.close();
            });
            console.log(genrelist);
            booklist[i].genre = genrelist;
            console.log(booklist[i]);
            i++;
          })
          .catch((err) => {
            next(err);
          });
      });
      res.send({ data: booklist });
      await session.close();
    })
    .catch((err) => {
      next(err);
    });
};
