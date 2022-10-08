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

  var todoList = require("../controllers/appController");
  // todoList Routes
  app.get("/", (req, res) => {
    res.send("hello");
  });
  app.route("/tasks").get(todoList.list_all_tasks).post(todoList.create_a_task);

  app
    .route("/tasks/:taskId")
    .get(todoList.read_a_task)
    .put(todoList.update_a_task)
    .delete(todoList.delete_a_task);
};
