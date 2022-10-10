"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Post = function (post) {
  console.log(post);
  // this.post_id=post.post_id;
  // this.user_name=post.user_name;
  // this.post_content=post.post_content;
  // this.post_spoil=post.post_spoil;
  // this.post_isdelete=post.post_isdelete;
};
Post.getAllPost = function getAllPost(result) {
  sql.query(
    "SELECT * FROM POST",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("post : ", res);
        result(null, res);
      }
    }
  );
};

module.exports = Post;
