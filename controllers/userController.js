"use strict";

const User = require("../models/userModel.js");

exports.login = function (req, res) {
  User.login(req.params.user,function (err, user) {
    console.log("controller");
    if (err) res.send(err);
    console.log("res", user);
    res.send(user);
  });

};
