"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _DashBoard = _interopRequireDefault(require("../views/DashBoard.vue"));

var _Game = _interopRequireDefault(require("../views/Game.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _LeaderBoard = _interopRequireDefault(require("../views/LeaderBoard.vue"));

var _Rewards = _interopRequireDefault(require("../views/Rewards.vue"));

var _Tutorial = _interopRequireDefault(require("../views/Tutorial.vue"));

var _SignUp = _interopRequireDefault(require("../views/SignUp.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'DashBoard',
  component: _DashBoard["default"]
}, {
  path: '/Game',
  name: 'Game',
  component: _Game["default"]
}, {
  path: '/Login',
  name: 'Login',
  component: _Login["default"]
}, {
  path: '/LeaderBoard',
  name: 'LeaderBoard',
  component: _LeaderBoard["default"]
}, {
  path: '/Rewards',
  name: 'Rewards',
  component: _Rewards["default"]
}, {
  path: '/SignUp',
  name: 'SignUp',
  component: _SignUp["default"]
}, {
  path: '/Tutorial',
  name: 'Tutorial',
  component: _Tutorial["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;