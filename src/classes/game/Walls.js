import Matter from 'matter-js'
import gameConfig from './gameConfig'
import * as PIXI from "pixi.js"

export default class Walls {
    constructor(engine, stage) {
        this.bind()
        this.engine = engine
        this.stage = stage

        gameConfig.walls

        this.topBody = Matter.Bodies.rectangle(
            gameConfig.viewer.w / 2,
            gameConfig.walls.vertMargin + gameConfig.walls.thickness / 2,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(gameConfig.viewer.w / 2,
            gameConfig.viewer.h - gameConfig.walls.vertMargin - gameConfig.walls.thickness / 2,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness,
            { isStatic: true })

        this.wGraphic = new PIXI.Graphics()
        this.wGraphic.lineStyle(2, gameConfig.neonBlue, 1)
        this.wGraphic.drawRect(gameConfig.walls.horMargin,
            gameConfig.walls.vertMargin,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness)
        this.wGraphic.drawRect(gameConfig.walls.horMargin,
            gameConfig.viewer.h - gameConfig.walls.thickness - gameConfig.walls.vertMargin,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness)

        this.stage.addChild(this.wGraphic)



        Matter.World.add(this.engine.world, [this.topBody, this.botBody])
        this.prevW = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }

    resize() {
        gameConfig.walls = {
            thickness: gameConfig.viewer.h * 0.03,
            vertMargin: gameConfig.viewer.h * 0.09,
            horMargin: gameConfig.viewer.h * 0.03,
        }
        this.wGraphic.clear()
        this.wGraphic.lineStyle(2, gameConfig.neonBlue, 1)
        this.wGraphic.drawRect(gameConfig.walls.horMargin,
            gameConfig.walls.vertMargin,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness)
        this.wGraphic.drawRect(gameConfig.walls.horMargin,
            gameConfig.viewer.h - gameConfig.walls.thickness - gameConfig.walls.vertMargin,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness)


        Matter.World.remove(this.engine.world, [this.topBody, this.botBody])
        this.topBody = Matter.Bodies.rectangle(
            gameConfig.viewer.w / 2,
            gameConfig.walls.vertMargin + gameConfig.walls.thickness / 2,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(gameConfig.viewer.w / 2,
            gameConfig.viewer.h - gameConfig.walls.vertMargin - gameConfig.walls.thickness / 2,
            gameConfig.viewer.w - gameConfig.walls.horMargin * 2,
            gameConfig.walls.thickness,
            { isStatic: true })
        Matter.World.add(this.engine.world, [this.topBody, this.botBody])

        console.log(window.innerWidth / this.prevW.w)
        this.prevW = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }


    bind() {
        this.resize = this.resize.bind(this)
    }
}