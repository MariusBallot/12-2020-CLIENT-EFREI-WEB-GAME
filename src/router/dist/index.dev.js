"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _store = require("../store/store");

var _DashBoard = _interopRequireDefault(require("../views/DashBoard.vue"));

var _Game = _interopRequireDefault(require("../views/Game.vue"));

var _Login = _interopRequireDefault(require("../views/Login.vue"));

var _LeaderBoard = _interopRequireDefault(require("../views/LeaderBoard.vue"));

var _Rewards = _interopRequireDefault(require("../views/Rewards.vue"));

var _Tutorial = _interopRequireDefault(require("../views/Tutorial.vue"));

var _SignUp = _interopRequireDefault(require("../views/SignUp.vue"));

var _ProfileSettings = _interopRequireDefault(require("../views/ProfileSettings.vue"));

var _Credits = _interopRequireDefault(require("../views/Credits.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_vue["default"].use(_vueRouter["default"]);

function authValidation(to, from, next) {
  return regeneratorRuntime.async(function authValidation$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(_store.store.dispatch("loadCurrUser"));

        case 2:
          if (to.name == "game" && window.browser.mobile == true) {
            next('/');
          } else if (_store.store.state.currUser == null) {
            next('Login');
          } else {
            next();
          }

        case 3:
        case "end":
          return _context.stop();
      }
    }
  });
}

var routes = [{
  path: '/login',
  name: 'login',
  component: _Login["default"]
}, {
  path: '/signUp',
  name: 'signUp',
  component: _SignUp["default"]
}, {
  path: '/',
  name: 'dashBoard',
  component: _DashBoard["default"],
  beforeEnter: authValidation
}, {
  path: '/game',
  name: 'game',
  component: _Game["default"],
  beforeEnter: authValidation
}, {
  path: '/leaderboard',
  name: 'leaderboard',
  component: _LeaderBoard["default"],
  beforeEnter: authValidation
}, {
  path: '/rewards',
  name: 'rewards',
  component: _Rewards["default"],
  beforeEnter: authValidation
}, {
  path: '/tutorial',
  name: 'tutorial',
  component: _Tutorial["default"]
}, {
  path: '/profile-settings',
  name: 'profile-settings',
  component: _ProfileSettings["default"],
  beforeEnter: authValidation
}, {
  path: '/credits',
  name: 'credits',
  component: _Credits["default"]
}];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;