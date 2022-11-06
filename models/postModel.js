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
    "SELECT * FROM (SELECT * FROM (SELECT A.POST_ID, A.POST_CONTENT,B.FILM_ID,B.FILM_NAME,B.EVALUATION_RATE,A.USER_NAME, A.USER_AVATARURL FROM (SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user WHERE post.USER_NAME=user.USER_NAME and post.POST_ISDELETE=0) as A LEFT JOIN (SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID AND post.POST_ISDELETE=0) as B ON A.POST_ID=B.POST_ID) AS G LEFT JOIN (SELECT D.POST_ID as POST_IDD,D.COMMENT_ID,D.COMMENT_CONTENT,D.COMMENT_PARENT,C.USER_NAME AS USERNAMEE, C.USER_AVATARURL AS USER_AVATARURLL FROM (SELECT A.POST_ID, A.POST_CONTENT,B.FILM_ID,B.FILM_NAME,B.EVALUATION_RATE,A.USER_NAME, A.USER_AVATARURL FROM (SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user WHERE post.USER_NAME=user.USER_NAME and post.POST_ISDELETE=0) as A LEFT JOIN (SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID AND post.POST_ISDELETE=0) as B ON A.POST_ID=B.POST_ID) AS C , comment AS D WHERE D.POST_ID=C.POST_ID AND D.COMMENT_ISDELETE=0 ORDER BY D.POST_ID ASC) AS H ON G.POST_ID=H.POST_IDD) AS O, media as M WHERE O.POST_ID=M.POST_ID AND M.MEDIA_ISDELETE=0",
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        var tempPostList = [];

        res.forEach((i) => {
          console.log(i);
          var tempCommentList = [];
          let tempCom = [];
          var tempMediaList = [];
          let tempMe = [];
          res.forEach((j) => {
            if (j.POST_ID == i.POST_ID) {
              //
              tempCom.push({
                commentId: j.COMMENT_ID + "",
                user: {
                  username: j.USER_NAME,
                  avatarUrl: j.USER_AVATARURL,
                  bio: "",
                },
                content: j.COMMENT_CONTENT,
                parent: j.COMMENT_PARENT + "",
                postId: j.POST_ID + "",
              });
              //
              // tempCommentList.push({
              //   commentId: j.COMMENT_ID+'',
              //   user: {
              //     username: j.USER_NAME,
              //     avatarUrl: j.USER_AVATARURL,
              //     bio:''
              //   },
              //   content: j.COMMENT_CONTENT,
              //   parent: j.COMMENT_PARENT+'',
              //   postId: j.POST_ID+'',
              // });

              tempCom.forEach((element) => {
                if (
                  !tempCommentList.find(
                    (x) => x.commentId === element.commentId
                  )
                ) {
                  tempCommentList.push(element);
                }
              });
            }
          });
          res.forEach((k) => {
            if (k.POST_ID == i.POST_ID) {
              // tempMediaList.push({
              //   mediaId:k.MEDIA_ID,
              //   url: k.MEDIA_URL,
              // });
              tempMe.push({
                mediaId: k.MEDIA_ID,
                type: k.MEDIA_TYPE,
                url: k.MEDIA_URL,
              });
              tempMe.forEach((element) => {
                if (!tempMediaList.find((x) => x.mediaId === element.mediaId)) {
                  tempMediaList.push(element);
                }
              });
            }
          });
          tempPostList.push({
            postId: i.POST_ID.toString(),
            display: true,
            item: {
              id: i.POST_ID.toString(),
              content: i.POST_CONTENT,
              user: {
                username: i.USER_NAME,
                avatarUrl: i.USER_AVATARURL,
                bio: "",
              },
              rate: i.EVALUATION_RATE != null ? i.EVALUATION_RATE + "" : "",
              filmtag: {
                filmId: i.FILM_ID + "",
                filmName: i.FILM_NAME,
              },
            },
            medias: tempMediaList,
            comments: tempCommentList,
          });
        });
        var res = [];
        tempPostList.forEach((element) => {
          if (!res.find((x) => x.postId === element.postId)) {
            res.push(element);
          }
        });

        result(null, res);
      }
    }
  );
};
// Post.getAllPost = function getAllPost(result) {
//   sql.query(
//     "SELECT A.POST_ID, A.POST_CONTENT,B.FILM_ID,B.FILM_NAME,B.EVALUATION_RATE,A.USER_NAME, A.USER_AVATARURL FROM (SELECT post.POST_ID,post.POST_CONTENT,user.USER_NAME, user.USER_AVATARURL FROM post, user WHERE post.USER_NAME=user.USER_NAME and post.POST_ISDELETE=0) as A LEFT JOIN (SELECT post.POST_ID,post.POST_CONTENT,film.FILM_ID, film.FILM_NAME, evaluation.EVALUATION_RATE, evaluation.USER_NAME, user.USER_AVATARURL FROM post, user, evaluation, film WHERE post.USER_NAME=user.USER_NAME and post.POST_ID=evaluation.POST_ID and user.USER_NAME=evaluation.USER_NAME and evaluation.FILM_ID=film.FILM_ID AND post.POST_ISDELETE=0) as B ON A.POST_ID=B.POST_ID",
//     function (err, res) {
//       if (err) {
//         result(null, err);
//       } else {
//         var tempPostList = [];
//         res.forEach((i) => {
//           tempPostList.push({
//             postId: i.POST_ID.toString(),
//             display: true,
//             item: {
//               id: i.POST_ID.toString(),
//               content: i.POST_CONTENT,
//               user: {
//                 username: i.USER_NAME,
//                 avatarUrl: i.USER_AVATARURL,
//                 bio: "",
//               },
//               rate: i.EVALUATION_RATE,
//               filmtag: {
//                 filmId: i.FILM_ID,
//                 filmName: i.FILM_NAME,
//               },
//             },
//             comments: [],
//           });
//         });

//         result(null, tempPostList);
//       }
//     }
//   );
// };
Post.postpost = function postpost(post, result) {
  sql.query(
    "INSERT INTO post (USER_NAME, POST_CONTENT, POST_SPOIL) VALUES (?,?,?)",
    [post.username, post.content, post.isSpoil],
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
