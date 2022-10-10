"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var User = function (user) {
  console.log(user);
  // this.post_id=post.post_id;
  // this.user_name=post.user_name;
  // this.post_content=post.post_content;
  // this.post_spoil=post.post_spoil;
  // this.post_isdelete=post.post_isdelete;
};
User.login = function login(user,result) {
  sql.query(
    "SELECT * FROM USER ",
    function (err, res) {
      console.log	('user= ',user.user_name)
      if (err) {
      //  console.log("error: ", err);
        result(null, err);
      } else {
       // console.log("user : ", res);
        result(null, res);
      }
    }
  );

};



module.exports = User;
