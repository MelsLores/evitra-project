"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateUser = exports.getUsers = exports.getUser = exports.createUser = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _database = require("../database");
var getUsers = exports.getUsers = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var pool, result;
    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context.sent;
          _context.next = 6;
          return pool.request().query(_database.queries.getAllUsers);
        case 6:
          result = _context.sent;
          console.log(result);
          res.json(result.recordset);
          _context.next = 15;
          break;
        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](0);
          res.status(500);
          res.send(_context.t0.message);
        case 15:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 11]]);
  }));
  return function getUsers(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var createUser = exports.createUser = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var _req$body, usuario, contraseña, _req$body2, nombre_usuario, correo_alterno, celular, id_sexo, fechanacimiento, id_empresa, id_tipousuario, usuario_status, pool;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, usuario = _req$body.usuario, contraseña = _req$body.contraseña;
          _req$body2 = req.body, nombre_usuario = _req$body2.nombre_usuario, correo_alterno = _req$body2.correo_alterno, celular = _req$body2.celular, id_sexo = _req$body2.id_sexo, fechanacimiento = _req$body2.fechanacimiento, id_empresa = _req$body2.id_empresa, id_tipousuario = _req$body2.id_tipousuario, usuario_status = _req$body2.usuario_status;
          if (!(usuario == null || contraseña == null)) {
            _context2.next = 4;
            break;
          }
          return _context2.abrupt("return", res.status(400).json({
            msg: 'Bad request. Fill all fields.'
          }));
        case 4:
          if (nombre_usuario == null) {
            nombre_usuario = " ";
          }
          if (celular == null) {
            celular = 8123393945;
          }
          if (id_sexo == null) {
            id_sexo = 2;
          }
          if (id_empresa == null) {
            id_empresa = 2;
          }
          if (id_tipousuario == null) {
            id_tipousuario = 1;
          }
          if (usuario_status == null) {
            usuario_status = 1;
          }
          _context2.prev = 10;
          _context2.next = 13;
          return (0, _database.getConnection)();
        case 13:
          pool = _context2.sent;
          _context2.next = 16;
          return pool.request().input('usuario', _database.sql.VarChar, usuario).input('contraseña', _database.sql.VarChar, contraseña).input('nombre_usuario', _database.sql.VarChar, nombre_usuario).input('correo_alterno', _database.sql.VarChar, correo_alterno).input('celular', _database.sql.Float, celular).input('id_empresa', _database.sql.Int, id_empresa).input('id_tipousuario', _database.sql.Int, id_tipousuario).input('usuario_status', _database.sql.Int, usuario_status).query(_database.queries.createNewUser);
        case 16:
          console.log(usuario, contraseña, nombre_usuario, correo_alterno, celular, id_sexo, fechanacimiento, id_empresa, id_tipousuario, usuario_status);
          res.json({
            usuario: usuario,
            contraseña: contraseña,
            nombre_usuario: nombre_usuario,
            correo_alterno: correo_alterno,
            celular: celular,
            id_sexo: id_sexo,
            fechanacimiento: fechanacimiento,
            id_empresa: id_empresa,
            id_tipousuario: id_tipousuario,
            usuario_status: usuario_status
          });
          _context2.next = 24;
          break;
        case 20:
          _context2.prev = 20;
          _context2.t0 = _context2["catch"](10);
          res.status(500);
          res.send(_context2.t0.message);
        case 24:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[10, 20]]);
  }));
  return function createUser(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getUser = exports.getUser = /*#__PURE__*/function () {
  var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
    var usuario, pool, result;
    return _regenerator["default"].wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          usuario = req.params.usuario;
          _context3.next = 3;
          return (0, _database.getConnection)();
        case 3:
          pool = _context3.sent;
          _context3.next = 6;
          return pool.request().input("usuario", usuario).query(_database.queries.getUser);
        case 6:
          result = _context3.sent;
          console.log(result);
          res.send(result.recordset[0]);
        case 9:
        case "end":
          return _context3.stop();
      }
    }, _callee3);
  }));
  return function getUser(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateUser = exports.updateUser = /*#__PURE__*/function () {
  var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
    var contraseña, usuario, pool, result;
    return _regenerator["default"].wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          contraseña = req.body.contraseña;
          usuario = req.params.usuario;
          if (!(usuario == null || contraseña == null)) {
            _context4.next = 4;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            msg: 'Bad request. Fill all fields.'
          }));
        case 4:
          _context4.next = 6;
          return (0, _database.getConnection)();
        case 6:
          pool = _context4.sent;
          _context4.next = 9;
          return pool.request().input("contraseña", _database.sql.VarChar, contraseña).input("usuario", _database.sql.VarChar, usuario).query(_database.queries.updateUser);
        case 9:
          result = _context4.sent;
          res.send(result);
        case 11:
        case "end":
          return _context4.stop();
      }
    }, _callee4);
  }));
  return function updateUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();