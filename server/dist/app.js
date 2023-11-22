"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _config = _interopRequireDefault(require("./config"));
var _express = _interopRequireDefault(require("express"));
var _users = _interopRequireDefault(require("./routes/users.routes"));
var app = (0, _express["default"])();
app.set('port', _config["default"].port);
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_users["default"]);
var _default = exports["default"] = app;