import RAF from '@/utils/RAF'
import Matter from "matter-js"
import * as PIXI from "pixi.js"

import Player from './Player'
import Walls from './Walls'
import Obstacles from './Obstacles'
import GameConfig from './GameConfig';

class MainGame {
    constructor() {
        this.bind()
        this.time = 0
        this.bonus = 0
        this.score = 0
        this.startTime = 0;
        this.lost = false

        this.clockDom
        this.scoreDom
        this.bonusCallBack
        this.deathCallBack
        this.resetCallBack
    }

    setClock(el) {
        this.clockDom = el
    }
    setScore(el) {
        this.scoreDom = el
    }
    setBonusCallback(cb) {
        this.bonusCallBack = cb
    }
    setDeathCallback(cb) {
        this.deathCallBack = cb
    }
    setResetCallback(cb) {
        this.resetCallBack = cb
    }


    init(gameContainer, debugCanvas) {
        GameConfig.updateValues()
        this.gameContainer = gameContainer
        this.debugCanvas = debugCanvas
        this.renderer = new PIXI.autoDetectRenderer({
            width: GameConfig.viewer.w,
            height: GameConfig.viewer.h,
            transparent: true
        })
        this.stage = new PIXI.Container()
        this.gameContainer.appendChild(this.renderer.view)


        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0;

        this.debugRender = Matter.Render.create({
            engine: this.engine,
            element: this.debugCanvas,
            options: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })

        if (GameConfig.matterDebug) {

            Matter.Render.run(this.debugRender)
        }

        this.player = new Player(this.engine, this.stage)
        this.walls = new Walls(this.engine, this.stage)
        Obstacles.init(this.engine, this.stage)



        Matter.Events.on(this.engine, 'collisionStart', (event) => {
            if (event.pairs[0].bodyA.gameType == "obs" || event.pairs[0].bodyB.gameType == "obs") {
                GameConfig.speed = 0
                this.lost = true
                this.player.lost = true
                this.engine.world.gravity.y = 1;
                this.player.pBody.frictionAir = 0;
                let data = {
                    score: this.score,
                    time: this.time * 0.001
                }
                this.deathCallBack(data)
                clearInterval(this.bonusInt)
            }

        })

        window.addEventListener('resize', this.resize)

    }

    reset() {
        Obstacles.reset()
        this.player.reset()
        this.lost = false;
        this.engine.world.gravity.y = 0;
        GameConfig.speed = GameConfig.startSpeed
        this.bonusInt = setInterval(() => {
            GameConfig.speed += 1
            this.bonus += 15
            this.bonusCallBack("10S STREAK!", 15)
        }, 10000);
        this.startTime = Date.now()
        this.score = 0
        this.bonus = 0
        this.resetCallBack()
    }

    start() {

        GameConfig.speed = GameConfig.startSpeed
        this.bonusInt = setInterval(() => {
            GameConfig.speed += 1
            this.bonus += 15
            this.bonusCallBack("10S STREAK!", 15)
        }, 10000);

        RAF.subscribe("gameUpadate", this.update)
        this.startTime = Date.now()
    }

    update() {
        this.renderer.render(this.stage)
        if (!this.lost) this.time = Date.now() - this.startTime
        this.clockDom.innerHTML = this.time / 1000
        this.score = Math.floor(this.time / 1000) + this.bonus
        this.scoreDom.innerHTML = this.score

        Matter.Engine.update(this.engine);

        this.player.update()
        if (!this.lost) {
            Obstacles.update()
        }
    }

    stop() {
        this.time = 0
        this.bonus = 0
        this.score = 0
        this.startTime = 0;
        this.lost = false
        Obstacles.stop()
        PIXI.Loader.shared.reset()
        RAF.unsubscribe("gameUpadate")
    }

    resize() {
        GameConfig.updateValues()


        //this part resizes the canvas but keeps ratio the same
        this.renderer.view.style.width = GameConfig.viewer.w + "px";
        this.renderer.view.style.height = GameConfig.viewer.h + "px"
        this.renderer.resize(GameConfig.viewer.w, GameConfig.viewer.h);

        this.debugRender.canvas.width = GameConfig.viewer.w
        this.debugRender.canvas.height = GameConfig.viewer.h

        this.walls.resize()
        this.player.resize()
        Obstacles.resize()
    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
        this.resize = this.resize.bind(this)
        this.setClock = this.setClock.bind(this)
        this.setScore = this.setScore.bind(this)
        this.start = this.start.bind(this)
        this.stop = this.stop.bind(this)
        this.reset = this.reset.bind(this)
    }
}

const _instance = new MainGame()
export default _instance