import Matter from 'matter-js'
import gameConfig from './gameConfig'
import * as PIXI from "pixi.js"

export default class Walls {
    constructor(engine, stage) {
        this.bind()
        this.engine = engine
        this.stage = stage

        this.params = gameConfig.walls

        this.topBody = Matter.Bodies.rectangle(gameConfig.viewer.w / 2, this.params.vertMargin + this.params.thickness / 2,
            gameConfig.viewer.w - this.params.vertMargin / 4, this.params.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(gameConfig.viewer.w / 2, gameConfig.viewer.h - this.params.vertMargin - this.params.thickness / 2,
            gameConfig.viewer.w - this.params.vertMargin / 4, this.params.thickness,
            { isStatic: true })

        this.wGraphic = new PIXI.Graphics()
        this.wGraphic.beginFill(0xff0000)
        this.wGraphic.drawRect(this.params.thickness, this.params.vertMargin,
            gameConfig.viewer.w - this.params.vertMargin / 4, this.params.thickness)
        this.wGraphic.drawRect(this.params.thickness, this.params.vertMargin,
            gameConfig.viewer.w - this.params.vertMargin / 4, this.params.thickness)
        this.wGraphic.endFill()

        this.stage.addChild(this.wGraphic)
        // this.wGraphic.anchor(.5, .5)



        Matter.World.add(this.engine.world, [this.topBody, this.botBody])
    }


    bind() {
    }
}