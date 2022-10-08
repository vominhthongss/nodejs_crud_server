"user strict";
var sql = require("./db.js");

//Task object constructor
var Task = function (task) {
  console.log(task);
  this.task = task.task;
  this.status = task.status;
  this.created_at = new Date();
};
Task.createTask = function createUser(newTask, result) {
  sql.query("INSERT INTO tasks set ?", newTask, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      console.log(res.insertId);
      result(null, res.insertId);
    }
  });
};
Task.getTaskById = function createUser(taskId, result) {
  sql.query("Select * from tasks where id = ? ", taskId, function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(err, null);
    } else {
      result(null, res);
    }
  });
};
Task.getAllTask = function getAllTask(result) {
  sql.query(
    "SELECT * FROM tasks as a, taskdetail as b WHERE a.id = b.taskdetail_id",
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        console.log("tasks : ", res);
        var tempRes = [];
        var detail = [];
        res.forEach((i) => {
          if (i.id === i.taskdetail_id) {
            detail.push({
              content: i.taskdetail_content,
              username: i.taskdetail_username,
            });
            tempRes.push({
              id: i.id,
              task: i.task,
              status: i.status,
              detail: detail,
              created_at: i.created_at,
            });
          }
        });
        // res.forEach((i) => {
        //   detail.push({
        //     content: i.taskdetail_content,
        //     username: i.taskdetail_username,
        //   });
        //   tempRes.push({
        //     id: i.id,
        //     task: i.task,
        //     status: i.status,
        //     detail: detail,
        //     created_at: i.created_at,
        //   });
        // });

        result(null, tempRes);
        //result(null, res);
      }
    }
  );
};
Task.updateById = function (id, task, result) {
  sql.query(
    "UPDATE tasks SET task = ? WHERE id = ?",
    [task.task, id],
    function (err, res) {
      if (err) {
        console.log("error: ", err);
        result(null, err);
      } else {
        result(null, res);
      }
    }
  );
};
Task.remove = function (id, result) {
  sql.query("DELETE FROM tasks WHERE id = ?", [id], function (err, res) {
    if (err) {
      console.log("error: ", err);
      result(null, err);
    } else {
      result(null, res);
    }
  });
};

module.exports = Task;
