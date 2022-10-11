"use strict";

var Post = require("../models/postModel.js");

exports.list_all_posts = function (req, res) {
  Post.getAllPost(function (err, task) {
   // console.log("controller");
    if (err) res.send(err);
   // console.log("res2", task);
    res.send(task);
  });
};