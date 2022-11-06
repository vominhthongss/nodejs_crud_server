"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Film = function (film) {
};
Film.getAllFilm = function getAllFilm(result) {
  sql.query(
    "SELECT * from film where FILM_ISDELETE=0 ",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Film;
