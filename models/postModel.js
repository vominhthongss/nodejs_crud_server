"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Post = function (post) {
  //console.log(post);
  // this.post_id=post.post_id;
  // this.user_name=post.user_name;
  // this.post_content=post.post_content;
  // this.post_spoil=post.post_spoil;
  // this.post_isdelete=post.post_isdelete;
};
Post.getAllPost = function getAllPost(result) {
  sql.query(
    "SELECT A.POST_ID, A.POST_CONTENT,B.FILM_ID,B.FILM_NAME,B.EVALUATION_RATE,A.USER_NAME, A.USER_AVATARURL FROM (SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user WHERE post.USER_NAME=user.USER_NAME and post.POST_ISDELETE=0) as A LEFT JOIN (SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID AND post.POST_ISDELETE=0) as B ON A.POST_ID=B.POST_ID",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};

module.exports = Post;
