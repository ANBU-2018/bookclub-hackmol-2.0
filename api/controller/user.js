var driver = require("./../database");

exports.addPrefrences = (req, res, next) => {
  var session = driver.session();
  var query = `MATCH (n:people{username:$username}) MATCH(m:genre{name:$genre}) MERGE (n)-[r:prefers]->(m) return n`;
  session
    .run(query, {
      username: req.body.userName,
      genre: req.body.genre,
    })
    .then(() => {
      res.send({ message: "prefrence added" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.removePrefrences = (req, res, next) => {
  var session = driver.session();
  var query = `MATCH (n:people{username:$username})-[r:prefers]->(m:genre{name:$genre}) delete r`;
  session
    .run(query, {
      username: req.body.userName,
      genre: req.body.genre,
    })
    .then(() => {
      res.send({ message: "prefrence removed" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.addfavourite = (req, res, next) => {
  var session = driver.session();
  var query = `MATCH (n:people{username:$username}) MATCH (m:book{name:$bookName}) MERGE (n)-[r:favourite{priority:$priority}]->(m) return r`;
  session
    .run(query, {
      username: req.body.userName,
      bookName: req.body.bookName,
      priority: req.body.priority,
    })
    .then((result) => {
      console.log(result);
      res.send({ message: "favourite added" });
    })
    .catch((err) => {
      next(err);
    });
};

exports.deletefavourite = (req, res, next) => {
  var session = driver.session();
  var query = `MATCH (n:people{username:$username})-[r:favourite]->(m:book{name:$bookName}) delete r`;
  session
    .run(query, {
      username: req.body.userName,
      bookName: req.body.bookName,
      priority: req.body.priority,
    })
    .then(() => {
      res.send({ message: "favourite removed" });
    })
    .catch((err) => {
      next(err);
    });
};
