var neo4j = require("neo4j-driver");

var driver = neo4j.driver(
  "bolt://100.26.159.204:32813",
  neo4j.auth.basic("neo4j", "aggravations-improvements-formula")
);
module.exports = driver;
