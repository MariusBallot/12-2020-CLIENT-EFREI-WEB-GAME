import RAF from '../../utils/RAF'
import Matter from 'matter-js'
import * as PIXI from "pixi.js"
import GameConfig from './GameConfig'

export default class Objstacle {
    constructor(engine, stage, i) {
        this.bind()
        this.stage = stage
        this.engine = engine
        this.index = i
        this.currPos = {}


        this.currPos.x = GameConfig.obstacles.space * this.index + GameConfig.obstacles.startSpace
        // this.currPos.x = 300

        this.availHeight = GameConfig.viewer.h - (2 * GameConfig.walls.vertMargin + 2 * GameConfig.walls.thickness)
        this.seed = Math.round(Math.random() * (GameConfig.obstacles.vertNumber - 1))
        this.currPos.y = (GameConfig.walls.vertMargin + GameConfig.walls.thickness + (this.availHeight / GameConfig.obstacles.vertNumber) / 2)
            + (this.availHeight / GameConfig.obstacles.vertNumber) * this.seed

        this.oBody = Matter.Bodies.rectangle(this.currPos.x, this.currPos.y, GameConfig.obstacle.width, this.availHeight / GameConfig.obstacles.vertNumber, { isStatic: true })
        this.oBody.gameType = `obs`

        this.oSkin = new PIXI.Container()
        const graph = new PIXI.Graphics()
        graph.beginFill(GameConfig.neonRed)
        graph.drawRect(-0.5, -0.5, 1, 1)
        graph.endFill()
        this.oSkin.addChild(graph)
        this.oSkin.width = GameConfig.obstacle.width;
        this.oSkin.height = this.availHeight / GameConfig.obstacles.vertNumber;
        this.stage.addChild(this.oSkin)
        Matter.World.add(this.engine.world, this.oBody)

        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            obstacle: GameConfig.obstacle,
            obstacles: GameConfig.obstacles,
        }
    }

    reset() {
        Matter.Body.setPosition(this.oBody, {
            x: this.currPos.x,
            y: this.currPos.y,
        })
    }

    update() {
        Matter.Body.setPosition(this.oBody, { x: this.oBody.position.x - GameConfig.speed * RAF.dt, y: this.oBody.position.y })

        if (this.oBody.position.x <= 0 - GameConfig.obstacle.width) {
            this.currPos.x = GameConfig.obstacles.space * GameConfig.obstacles.horNumber
            this.seed = Math.round(Math.random() * (GameConfig.obstacles.vertNumber - 1))
            this.currPos.y = (GameConfig.walls.vertMargin + GameConfig.walls.thickness + (this.availHeight / GameConfig.obstacles.vertNumber) / 2)
                + (this.availHeight / GameConfig.obstacles.vertNumber) * this.seed
            Matter.Body.setPosition(this.oBody, {
                x: this.currPos.x,
                y: this.currPos.y
            })
        }

        this.oSkin.position.set(this.oBody.position.x, this.oBody.position.y)

    }

    resize() {
        console.log(this.prevConfig.obstacle.width, this.availHeight, this.prevConfig)
        Matter.Body.scale(this.oBody, 1 / (this.prevConfig.obstacle.width), 1 / (this.availHeight / this.prevConfig.obstacles.vertNumber))
        this.availHeight = GameConfig.viewer.h - (2 * GameConfig.walls.vertMargin + 2 * GameConfig.walls.thickness)
        Matter.Body.scale(this.oBody, GameConfig.obstacle.width, this.availHeight / GameConfig.obstacles.vertNumber)
        // Matter.Body.scale(this.oBody, this.prevConfig.obstacle.width, this.availHeight / this.prevConfig.obstacles.vertNumber)

        this.currPos.y = (GameConfig.walls.vertMargin + GameConfig.walls.thickness + (this.availHeight / GameConfig.obstacles.vertNumber) / 2)
            + (this.availHeight / GameConfig.obstacles.vertNumber) * this.seed
        Matter.Body.setPosition(this.oBody, {
            x: this.oBody.position.x,
            y: this.currPos.y
        })

        this.oSkin.width = GameConfig.obstacle.width;
        this.oSkin.height = this.availHeight / GameConfig.obstacles.vertNumber;

        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            obstacle: GameConfig.obstacle,
            obstacles: GameConfig.obstacles,
        }
    }


    bind() {
        this.update = this.update.bind(this)
        this.resize = this.resize.bind(this)
        this.reset = this.reset.bind(this)
    }
}