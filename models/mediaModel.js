"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Media = function (media) {};
Media.postMedia = function postMedia(media, result) {

    sql.query(
      "INSERT INTO media (POST_ID, MEDIA_URL, MEDIA_TYPE) VALUES (?,?,?)",
      [media.postId, media.url,media.type],
      function (err, res) {
        if (err) {
          result(null, err);
        } else {
          result(null, res);
        }
      }
    );
  

};
module.exports = Media;
