"use strict";
var cors = require("cors");

module.exports = function (app) {
  app.use(cors());
  app.use(function (req, res, next) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Content-Type, x-requested-with"
    );
    next();
  });
  app.disable("etag");
  //taskController
  // var taskController = require("../controllers/taskController");
  // app.get("/", (req, res) => {
  //   res.send("hello");
  // });
  // app.route("/tasks").get(taskController.list_all_tasks).post(taskController.create_a_task);
  // app
  //   .route("/tasks/:taskId")
  //   .get(taskController.read_a_task)
  //   .put(taskController.update_a_task)
  //   .delete(taskController.delete_a_task);
  //postController
  var postController = require("../controllers/postController");
  app.route("/postfeedlist").get(postController.list_all_posts);
  app.route("/post").post(postController.postpost);

  //userController
  var userController = require("../controllers/userController");
  app.route("/login").post(userController.login);

  app.route("/user/:user_name").get(userController.getuser);

  app.route("/userrecomendlist").get(userController.getuserrecomendlist);

  //commentController
  var commentController = require("../controllers/commentController");
  app.route("/comment/:postId").get(commentController.getCommentByPostId);

  app.route("/comment").post(commentController.createComment);

  //filmController
  var filmController = require("../controllers/filmController");
  app.route("/film").get(filmController.getAllFilm);
  //mediaController
  var mediaController = require("../controllers/mediaController");
  app.route("/media").post(mediaController.postMedia);
  //evaluationController
  var evaluationController = require("../controllers/evaluationController");
  app.route("/evaluefilm").post(evaluationController.evalueFilm);
};
