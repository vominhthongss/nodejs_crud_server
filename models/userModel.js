"user strict";
const { json } = require("body-parser");
var sql = require("./db.js");
var User = function (objUser) {
  this.user = objUser;
};
User.login = function login(_user, result) {
  var user_name = _user.user.user_name;
  var user_password = _user.user.user_password;
  sql.query(
    "SELECT * from USER where USER_NAME=? AND USER_PASSWORD=? AND USER_ISDELETE=0",
    [user_name, user_password],
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
User.getuser = function getuser(user_name, result) {
  sql.query(
    "SELECT * from USER where USER_NAME=? AND USER_ISDELETE=0",
    user_name,
    function (err, res) {
      if (err) {
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
module.exports = User;
