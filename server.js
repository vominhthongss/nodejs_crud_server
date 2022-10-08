const express = require("express"),
  app = express(),
  bodyParser = require("body-parser");

port = process.env.PORT || 3000;
var server = require("http").Server(app);
var io = require("socket.io")(server, {
  serveClient: true,
  cors: {
    origin: "http://localhost:4200",
    methods: ["GET", "POST"],
    credentials: true,
  },
});
server.listen(3000);

// tạo kết nối giữa client và server
io.on("connection", function (socket) {
  //socket.emit('test event', 'test event');

  // socket.on("disconnect", function () {});
  // //server lắng nghe dữ liệu từ client
  socket.on("comment", function (id_user) {
    //sau khi lắng nghe dữ liệu, server phát lại dữ liệu này đến các client khác
    socket.emit("notification", id_user);
  });
});

//app.listen(port);

console.log("API server started on: " + port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require("./routes/appRoutes"); //importing route
routes(app); //register the route
