"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.store = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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
      state.currUser = data;
    },
    onLoadUsers: function onLoadUsers(state, data) {
      console.log(data);
      state.users = data;
    },
    onLoadIcons: function onLoadIcons(state, data) {
      state.rewards.icons = data;
    },
    onLogOut: function onLogOut(state) {
      state.currUser = null;
    },
    onNewGame: function onNewGame(state) {
      state.currUser.ngames++;
    },
    onUpdateUser: function onUpdateUser(state, data) {
      state.currUser.gametag = data.gametag;
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
              return regeneratorRuntime.awrap(_axios["default"].post('/api/register', req));

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
              return regeneratorRuntime.awrap(_axios["default"].post('/api/login', req));

            case 2:
              userRes = _context2.sent;
              currUser = userRes.data.currUser;

              if (userRes.data.loggedIn) {
                _context2.next = 6;
                break;
              }

              return _context2.abrupt("return", userRes.data);

            case 6:
              _context2.next = 8;
              return regeneratorRuntime.awrap(_axios["default"].get('/api/icon/' + currUser.icon));

            case 8:
              userIconRes = _context2.sent;
              currUser.iconObj = userIconRes.data;
              this.commit('onLoadCurrUser', currUser);
              return _context2.abrupt("return", userRes.data);

            case 12:
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
              return regeneratorRuntime.awrap(_axios["default"].get('/api/icons'));

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
              return regeneratorRuntime.awrap(_axios["default"].get('/api/user'));

            case 2:
              userRes = _context4.sent;

              if (userRes.data.loggedIn) {
                _context4.next = 5;
                break;
              }

              return _context4.abrupt("return");

            case 5:
              currUser = userRes.data.currUser;
              _context4.next = 8;
              return regeneratorRuntime.awrap(_axios["default"].get('/api/icon/' + currUser.icon));

            case 8:
              userIconRes = _context4.sent;
              currUser.iconObj = userIconRes.data;
              this.commit('onLoadCurrUser', currUser);

            case 11:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    },
    loadUsers: function loadUsers(context) {
      var usersRes, users, iconsRes, icons;
      return regeneratorRuntime.async(function loadUsers$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].get('/api/users'));

            case 2:
              usersRes = _context5.sent;
              users = usersRes.data;
              _context5.next = 6;
              return regeneratorRuntime.awrap(_axios["default"].get('/api/icons/'));

            case 6:
              iconsRes = _context5.sent;
              icons = iconsRes.data;
              users.forEach(function (user) {
                icons.forEach(function (icon) {
                  if (icon.id == user.icon) {
                    user.iconObj = icon;
                  }
                });
              });
              this.commit('onLoadUsers', usersRes.data);

            case 10:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    },
    logOut: function logOut(context) {
      var userRes;
      return regeneratorRuntime.async(function logOut$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              _context6.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].post('/api/logout'));

            case 2:
              userRes = _context6.sent;

              if (userRes.data.loggedOut) {
                _context6.next = 5;
                break;
              }

              return _context6.abrupt("return");

            case 5:
              this.commit('onLogOut');
              return _context6.abrupt("return", userRes.data);

            case 7:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    },
    changedIcon: function changedIcon(context, iconId) {
      var userRes;
      return regeneratorRuntime.async(function changedIcon$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              _context7.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].put('/api/user', {
                icon: iconId
              }));

            case 2:
              userRes = _context7.sent;
              this.dispatch('loadCurrUser');

            case 4:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    },
    newGame: function newGame(context) {
      var newNgames, userRes;
      return regeneratorRuntime.async(function newGame$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              newNgames = context.state.currUser.ngames + 1;
              _context8.next = 3;
              return regeneratorRuntime.awrap(_axios["default"].put('/api/user', {
                ngames: newNgames
              }));

            case 3:
              userRes = _context8.sent;
              this.commit('onNewGame');

            case 5:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this);
    },
    gameFinished: function gameFinished(context, ndata) {
      var userRes;
      return regeneratorRuntime.async(function gameFinished$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              _context9.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].put('/api/user', ndata));

            case 2:
              userRes = _context9.sent;
              this.dispatch('loadCurrUser');

            case 4:
            case "end":
              return _context9.stop();
          }
        }
      }, null, this);
    },
    updateUser: function updateUser(context, data) {
      var res;
      return regeneratorRuntime.async(function updateUser$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return regeneratorRuntime.awrap(_axios["default"].put('/api/update-user', data));

            case 2:
              res = _context10.sent;

              if (res.data.success) {
                this.commit('onUpdateUser', res.data.currUser);
              }

              return _context10.abrupt("return", res.data);

            case 5:
            case "end":
              return _context10.stop();
          }
        }
      }, null, this);
    }
  }
});
exports.store = store;