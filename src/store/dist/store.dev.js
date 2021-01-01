"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

var _config = _interopRequireDefault(require("../utils/config"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var url = "http://localhost:3000";

_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  state: {
    users: [],
    currUser: null,
    rewards: {
      icons: []
    }
  },
  mutations: {
    onLoadCurrUser: function onLoadCurrUser(state, data) {
      console.log(data);
      state.currUser = data;
    },
    onLoadIcons: function onLoadIcons(state, data) {
      state.rewards.icons = data;
    }
  },
  actions: {
    register: function register(context, req) {
      var res;
      return regeneratorRuntime.async(function register$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].post(url + '/register', req));

            case 2:
              res = _context.sent;
              return _context.abrupt("return", res.data);

            case 4:
            case "end":
              return _context.stop();
          }
        }
      });
    },
    login: function login(context, req) {
      var userRes, currUser, userIconRes;
      return regeneratorRuntime.async(function login$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].post(url + '/login', req));

            case 2:
              userRes = _context2.sent;
              currUser = userRes.data.currUser;
              _context2.next = 6;
              return regeneratorRuntime.awrap(_axios["default"].get(url + '/icon/' + currUser.icon));

            case 6:
              userIconRes = _context2.sent;
              currUser.iconObj = userIconRes.data;
              this.commit('onLoadCurrUser', currUser);
              return _context2.abrupt("return", userRes.data);

            case 10:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    },
    loadIcons: function loadIcons(context) {
      var res;
      return regeneratorRuntime.async(function loadIcons$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get(url + '/icons'));

            case 2:
              res = _context3.sent;
              this.commit('onLoadIcons', res.data);

            case 4:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    },
    loadCurrUser: function loadCurrUser(context) {
      var userRes, currUser, userIconRes;
      return regeneratorRuntime.async(function loadCurrUser$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get(url + '/user'));

            case 2:
              userRes = _context4.sent;
              console.log(userRes.data);

              if (userRes.data.loggedIn) {
                _context4.next = 6;
                break;
              }

              return _context4.abrupt("return");

            case 6:
              currUser = userRes.data.currUser;
              console.log("coucou");
              _context4.next = 10;
              return regeneratorRuntime.awrap(_axios["default"].get(url + '/icon/' + currUser.icon));

            case 10:
              userIconRes = _context4.sent;
              currUser.iconObj = userIconRes.data;
              this.commit('onLoadCurrUser', currUser);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }
});
exports.store = store;