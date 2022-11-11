"use strict";

var Evaluation = require("../models/evaluationModel.js");

exports.evalueFilm = function (req, res) {
  var evalueFilm = req.body;
  Evaluation.evalueFilm(evalueFilm, function (err, evaluation) {
    if (err) res.send(err);
    res.send(evalueFilm);
  });
};
