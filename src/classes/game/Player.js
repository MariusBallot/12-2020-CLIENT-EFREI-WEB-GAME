import Matter from 'matter-js'
import * as PIXI from "pixi.js"
import Controls from './Controls'
import gameConfig from './gameConfig'


export default class Player {
    constructor(engine, stage) {
        this.bind()
        this.engine = engine
        this.stage = stage
        this.lost = false
        this.loader = PIXI.Loader.shared

        this.params = gameConfig.player
        this.pBody = Matter.Bodies.rectangle(this.params.startPos.x, this.params.startPos.y, this.params.width, this.params.width * this.params.aR);
        this.pBody.frictionAir = 0.2
        this.pBody.mass = 10
        this.pBody.gameType = "player"
        Matter.World.add(this.engine.world, this.pBody)

        this.loader.add('pSkin', 'assets/images/skinTest.jpg')
        this.loader.load(this.onLoaded)

        this.prevW = {
            w: window.innerWidth,
            h: window.innerHeight
        }
    }

    onLoaded(loader, resources) {
        console.log(resources)
        this.pSkin = new PIXI.Sprite(resources.pSkin.texture)
        this.pSkin.anchor.set(.5, .5)
        this.pSkin.width = this.params.width
        this.pSkin.height = this.params.width * this.params.aR
        this.pSkin.position.set(this.pBody.position.x, this.pBody.position.y)
        this.stage.addChild(this.pSkin)
    }
    reset() {
        this.pBody.frictionAir = 0.2
        this.lost = false
        Matter.Body.setPosition(this.pBody, {
            x: this.params.startPos.x,
            y: this.params.startPos.y
        })
    }

    update() {
        if (this.pSkin == undefined)
            return

        if (Controls.inputs.up)
            Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: -.1 })
        if (Controls.inputs.down)
            Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: .1 })

        if (!this.lost)
            Matter.Body.setAngle(this.pBody, this.pBody.velocity.y * 0.01)

        this.pSkin.position.set(this.pBody.position.x, this.pBody.position.y)
        this.pSkin.rotation = this.pBody.angle


    }

    resize() {
        // console.log(window.innerWidth / this.prevW.w)
        // this.prevW = {
        //     w: window.innerWidth,
        //     h: window.innerHeight
        // }

    }

    bind() {
        this.update = this.update.bind(this)
        this.reset = this.reset.bind(this)
        this.resize = this.resize.bind(this)
        this.onLoaded = this.onLoaded.bind(this)
    }
}