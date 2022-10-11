"use strict";

const User = require("../models/userModel.js");

exports.login = function (req, res) {
  var _user = new User(req.body);
  if (!_user.user) {
    res
      .status(400)
      .send({ error: true, message: "Please provide user/status" });
  } else {
    User.login(_user, function (err, user) {
      if (err) res.send(err);
      res.send(user);
    });
  }
};
exports.getuser = function (req, res) {
  User.getuser(req.params.user_name, function (err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};

exports.getuserrecomendlist = function (req, res) {
  User.getuserrecomendlist(function (err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};
