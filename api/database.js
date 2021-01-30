var neo4j = require("neo4j-driver");

var driver = neo4j.driver(
  "bolt://54.172.13.65:33641",
  neo4j.auth.basic("neo4j", "escorts-modules-rollers")
);
module.exports = driver;
