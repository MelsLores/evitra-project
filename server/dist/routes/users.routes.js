"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = require("express");
var _users = require("../controllers/users.controller");
var router = (0, _express.Router)();
router.get('/users', _users.getUsers);
router.post('/users', _users.createUser);
router.put('/users/:usuario', _users.updateUser);
router.get('/users/:usuario', _users.getUser);
var _default = exports["default"] = router;