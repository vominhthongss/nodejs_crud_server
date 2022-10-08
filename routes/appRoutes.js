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

  var taskController = require("../controllers/taskController");
  // todoList Routes
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.route("/tasks").get(taskController.list_all_tasks).post(taskController.create_a_task);

  app
    .route("/tasks/:taskId")
    .get(taskController.read_a_task)
    .put(taskController.update_a_task)
    .delete(taskController.delete_a_task);
};
