"use strict";

var Post = require("../models/postModel.js");

exports.list_all_posts = function (req, res) {
  Post.getAllPost(function (err, post) {
    // console.log("controller");
    if (err) res.send(err);
    // console.log("res2", task);
    res.send(post);
  });
};
exports.postpost = function (req, res) {
  var post = req.body;
  Post.postpost(post, function (err, post) {
    if (err) res.send(err);
    res.send(post);
  });
};
