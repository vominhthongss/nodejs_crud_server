"use strict";

const Media = require("../models/mediaModel.js");

exports.postMedia = function (req, res) {
  var media = req.body;
  console.log('media :', media);
  Media.postMedia(media, function (err, user) {
    if (err) res.send(err);
    res.send(user);
  });
};
