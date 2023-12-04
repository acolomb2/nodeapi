"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _express = _interopRequireDefault(require("express"));
var app = (0, _express["default"])();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
  res.send({
    msg: "Hello There"
  });
});
app.listen(port);