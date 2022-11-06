"use strict";

const Film = require("../models/filmModel.js");

exports.getAllFilm = function (req, res) {
  Film.getAllFilm(function (err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};
