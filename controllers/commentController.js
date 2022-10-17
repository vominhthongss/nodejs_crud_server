"use strict";

var Comment = require("../models/commentModel.js");

exports.getCommentByPostId = function (req, res) {
  Comment.getCommentByPostId(req.params.postId, function (err, comment) {
    // console.log("controller");
    if (err) res.send(err);
    // console.log("res2", task);
    res.send(comment);
  });
};
exports.createComment = function (req, res) {
  var _comment = new Comment(req.body);

  Comment.createComment(_comment, function (err, comment) {
    if (err) res.send(err);
    res.send(comment);
  });
};
