"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var Comment = function (objComment) {
  //console.log(post);
  // this.post_id=post.post_id;
  // this.user_name=post.user_name;
  // this.post_content=post.post_content;
  // this.post_spoil=post.post_spoil;
  // this.post_isdelete=post.post_isdelete;
  this.comment = objComment;
};
Comment.getCommentByPostId = function getCommentByPostId(postId, result) {
  sql.query(
    "SELECT D.POST_ID,D.COMMENT_ID,D.COMMENT_CONTENT,D.COMMENT_PARENT,C.USER_NAME, C.USER_AVATARURL FROM (SELECT A.POST_ID, A.POST_CONTENT,B.FILM_ID,B.FILM_NAME,B.EVALUATION_RATE,A.USER_NAME, A.USER_AVATARURL FROM (SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user WHERE post.USER_NAME=user.USER_NAME and post.POST_ISDELETE=0) as A LEFT JOIN (SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID AND post.POST_ISDELETE=0) as B ON A.POST_ID=B.POST_ID) AS C , comment AS D WHERE D.POST_ID=C.POST_ID AND D.COMMENT_ISDELETE=0 AND D.POST_ID=?",
    postId,
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        var tempCommentList = [];
        res.forEach((j) => {
          tempCommentList.push({
            commentId: j.COMMENT_ID.toString(),
            user: {
              username: j.USER_NAME,
              avatarUrl: j.USER_AVATARURL,
              bio: "",
            },
            content: j.COMMENT_CONTENT,
            parent: j.COMMENT_PARENT.toString(),
            postId: j.POST_ID.toString(),
          });
        });
        result(null, tempCommentList);
      }
    }
  );
};

Comment.createComment = function getCommentByPostId(_comment, result) {
  sql.query(
    "INSERT INTO comment (POST_ID, USER_NAME, COMMENT_CONTENT, COMMENT_PARENT) VALUES (?,?,?,?)",
    [
      _comment.comment.postId,
      _comment.comment.user.username,
      _comment.comment.content,
      _comment.comment.parent,
    ],
    function (err, res) {
      console.log(_comment);
      if (err) {
        result(null, err);
      } else {
        console.log(res);
        result(null, res);
      }
    }
  );
};

module.exports = Comment;
