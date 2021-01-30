const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
var driver = require("./../database");

exports.postLogin = async (req, res, next) => {
  var session = driver.session();
  var query = `MATCH (n:people{email:$email}) RETURN n`;
  session
    .run(query, {
      email: req.body.email,
    })
    .then(async (result) => {
      if (result.records[0] === undefined) {
        var message =
          "The Provided email is Not Registered Check again and Try";
        res.send({ message });
      } else {
        let passwordMatched = await bcrypt.compare(
          req.body.password,
          result.records[0]._fields[0].properties.password
        );
        if (!passwordMatched) {
          res.send("USERNAME OR PASSWORD NOT CORRECT");
        } else {
          var result1 = [];
<<<<<<< HEAD
          let token = jwt.sign({ email: req.body.email }, process.env.secret);
=======
          let token = jwt.sign({ email: req.body.email }, process.env.TOKEN_SECRET);
          res.cookie("auth-token", token);

>>>>>>> e62bb1821d1561fa68fd9a2850e5ea4053130a87
          result.records.forEach((record) => {
            result1.push(
              record._fields[0].properties.email,
              record._fields[0].properties.firstname,
              record._fields[0].properties.lastname,
              record._fields[0].properties.username,
              token
            );
          });
          res.send(result1);
        }
      }
    })
    .catch((err) => {
      next(err);
    });
};

// signup

exports.adduser = async (req, res, next) => {
  const hash = await bcrypt.hash(req.body.password, 10);
  var session = driver.session();
  var query = `MATCH (n:people{email:$email}) RETURN n.email`;
  session
    .run(query, {
      email: req.body.email,
    })
    .then((result) => {
      if (result.records[0] !== undefined) {
        var message =
          "The Provided email is Already Registered Check again and Try";
      } else {
        var date = new Date();
        var query = `MERGE (n:people{
            firstname: "${req.body.firstname}",
            lastname: "${req.body.lastname}",
            username: "${req.body.username}",
            email: "${req.body.email}",
            password: "${hash}",
            dateCreated: "${date.getFullYear() +
          "-" +
          (date.getMonth() + 1) +
          "-" +
          date.getDate()
          }"}) `;
        session
          .run(query, {})
          .then((result) => {
            result.records.forEach((record) => { });
          })
          .catch((error) => {
            next(error);
          });
        message = "Signup Successfull";
      }
      res.send({ data: message });
    })
    .catch((error) => {
      next(error);
    });
};
