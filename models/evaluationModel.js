"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Evaluation = function (post) {};

Evaluation.evalueFilm = function evalueFilm(evalueFilm, result) {
  sql.query(
    "INSERT INTO evaluation (FILM_ID, USER_NAME, POST_ID, EVALUATION_RATE) VALUES (?,?,?,?)",
    [
      evalueFilm.filmId,
      evalueFilm.username,
      evalueFilm.postId,
      evalueFilm.vote,
    ],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = Evaluation;
