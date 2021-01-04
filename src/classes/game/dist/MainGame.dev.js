"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _RAF = _interopRequireDefault(require("@/utils/RAF"));

var _matterJs = _interopRequireDefault(require("matter-js"));

var _config = _interopRequireDefault(require("@/utils/config"));

var _gsap = require("gsap");

var _Player = _interopRequireDefault(require("./Player"));

var _Walls = _interopRequireDefault(require("./Walls"));

var _Obstacles = _interopRequireDefault(require("./Obstacles"));

var _gameConfig = _interopRequireDefault(require("./gameConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MainGame =
/*#__PURE__*/
function () {
  function MainGame() {
    _classCallCheck(this, MainGame);

    this.bind();
    this.time = 0;
    this.bonus = 0;
    this.score = 0;
    this.startTime = 0;
    this.lost = false;
    this.clockDom;
    this.scoreDom;
    this.bonusCallBack;
    this.deathCallBack;
  }

  _createClass(MainGame, [{
    key: "setClock",
    value: function setClock(el) {
      this.clockDom = el;
    }
  }, {
    key: "setScore",
    value: function setScore(el) {
      this.scoreDom = el;
    }
  }, {
    key: "setBonusCallback",
    value: function setBonusCallback(cb) {
      this.bonusCallBack = cb;
    }
  }, {
    key: "setDeathCallback",
    value: function setDeathCallback(cb) {
      this.deathCallBack = cb;
    }
  }, {
    key: "init",
    value: function init(domCanvas, debugCanvas) {
      var _this = this;

      this.domCanvas = domCanvas;
      this.debugCanvas = debugCanvas;
      this.ctx = this.domCanvas.getContext('2d');
      this.cWidth = this.ctx.canvas.width = window.innerWidth;
      this.cHeight = this.ctx.canvas.height = window.innerHeight;
      this.engine = _matterJs["default"].Engine.create();
      this.engine.world.gravity.y = 0;
      this.debugRender = _matterJs["default"].Render.create({
        engine: this.engine,
        element: this.debugCanvas,
        options: {
          width: window.innerWidth,
          height: window.innerHeight
        }
      });
      if (_config["default"].matterDebug) _matterJs["default"].Render.run(this.debugRender);
      this.player = new _Player["default"](this.engine, this.ctx);
      this.walls = new _Walls["default"](this.engine, this.ctx);

      _Obstacles["default"].init(this.engine, this.ctx, this.player.pBody);

      _matterJs["default"].Events.on(this.engine, 'collisionStart', function (event) {
        if (event.pairs[0].bodyA.gameType == "obs" || event.pairs[0].bodyB.gameType == "obs") {
          _gameConfig["default"].obstacle.speed = 0;
          _this.lost = true;

          _this.deathCallBack(_this.score, _this.time * 0.001);

          _this.engine.world.gravity.y = 1;
          _this.player.pBody.frictionAir = 0;
          clearInterval(_this.bonusInt);
        }
      });
    }
  }, {
    key: "start",
    value: function start() {
      var _this2 = this;

      this.bonusInt = setInterval(function () {
        _gameConfig["default"].obstacle.speed += 1;
        _this2.bonus += 15;

        _this2.bonusCallBack("10S STREAK!", 15);
      }, 10000);

      _RAF["default"].subscribe("gameUpadate", this.update);

      this.startTime = Date.now();
    }
  }, {
    key: "update",
    value: function update() {
      if (!this.lost) this.time = Date.now() - this.startTime;
      this.clockDom.innerHTML = this.time / 1000;
      this.score = Math.floor(this.time / 1000) + this.bonus;
      this.scoreDom.innerHTML = this.score;

      _matterJs["default"].Engine.update(this.engine);

      this.player.update();

      _Obstacles["default"].update();

      this.draw();
    }
  }, {
    key: "draw",
    value: function draw() {
      this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
      this.player.draw();
      this.walls.draw();

      _Obstacles["default"].draw();
    }
  }, {
    key: "stop",
    value: function stop() {}
  }, {
    key: "resize",
    value: function resize() {
      this.cWidth = this.ctx.canvas.width = window.innerWidth;
      this.cHeight = this.ctx.canvas.height = window.innerHeight;
    }
  }, {
    key: "bind",
    value: function bind() {
      this.update = this.update.bind(this);
      this.draw = this.draw.bind(this);
      this.init = this.init.bind(this);
      this.resize = this.resize.bind(this);
      this.setClock = this.setClock.bind(this);
      this.setScore = this.setScore.bind(this);
      this.start = this.start.bind(this);
      this.stop = this.stop.bind(this);
    }
  }]);

  return MainGame;
}();

var _instance = new MainGame();

var _default = _instance;
exports["default"] = _default;