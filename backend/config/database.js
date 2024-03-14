const mysql = require("mysql")
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bakeryshop",
});

module.export = db