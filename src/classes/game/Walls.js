import Matter from 'matter-js'
import GameConfig from './GameConfig'
import * as PIXI from "pixi.js"

export default class Walls {
    constructor(engine, stage) {
        this.bind()
        this.engine = engine
        this.stage = stage

        GameConfig.walls

        this.topBody = Matter.Bodies.rectangle(
            GameConfig.viewer.w / 2,
            GameConfig.walls.vertMargin + GameConfig.walls.thickness / 2,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(GameConfig.viewer.w / 2,
            GameConfig.viewer.h - GameConfig.walls.vertMargin - GameConfig.walls.thickness / 2,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness,
            { isStatic: true })

        this.wGraphic = new PIXI.Graphics()
        this.wGraphic.lineStyle(2, GameConfig.neonBlue, 1)
        this.wGraphic.drawRect(GameConfig.walls.horMargin,
            GameConfig.walls.vertMargin,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)
        this.wGraphic.drawRect(GameConfig.walls.horMargin,
            GameConfig.viewer.h - GameConfig.walls.thickness - GameConfig.walls.vertMargin,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)

        this.stage.addChild(this.wGraphic)



        Matter.World.add(this.engine.world, [this.topBody, this.botBody])
        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            walls: GameConfig.walls

        }
    }

    resize() {
        Matter.Body.scale(this.topBody, 1 / (this.prevConfig.viewer.w - this.prevConfig.walls.horMargin * 2), 1 / (this.prevConfig.walls.thickness))
        Matter.Body.scale(this.botBody, 1 / (this.prevConfig.viewer.w - this.prevConfig.walls.horMargin * 2), 1 / (this.prevConfig.walls.thickness))

        this.wGraphic.clear()
        this.wGraphic.lineStyle(2, GameConfig.neonBlue, 1)
        this.wGraphic.drawRect(GameConfig.walls.horMargin,
            GameConfig.walls.vertMargin,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)
        this.wGraphic.drawRect(GameConfig.walls.horMargin,
            GameConfig.viewer.h - GameConfig.walls.thickness - GameConfig.walls.vertMargin,
            GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)
        Matter.Body.scale(this.topBody, GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)
        Matter.Body.setPosition(this.topBody, {
            x: GameConfig.viewer.w / 2,
            y: GameConfig.walls.vertMargin + GameConfig.walls.thickness / 2,
        })

        Matter.Body.scale(this.botBody, GameConfig.viewer.w - GameConfig.walls.horMargin * 2,
            GameConfig.walls.thickness)
        Matter.Body.setPosition(this.botBody, {
            x: GameConfig.viewer.w / 2,
            y: GameConfig.viewer.h - GameConfig.walls.vertMargin - GameConfig.walls.thickness / 2,
        })


        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            walls: GameConfig.walls
        }
    }


    bind() {
        this.resize = this.resize.bind(this)
    }
}