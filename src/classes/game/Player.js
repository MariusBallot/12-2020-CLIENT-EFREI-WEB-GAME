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
        this.pBody.gameType = "player"
        Matter.World.add(this.engine.world, this.pBody)

        this.loader.add('pSkin', 'assets/images/skinTest.jpg')
        this.loader.load(this.onLoaded)

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

    draw() {
        this.stage.beginPath()
        this.stage.save()

        //Center rotation
        this.stage.translate(this.pBody.position.x, this.pBody.position.y)
        this.stage.rotate(this.pBody.angle)
        this.stage.translate(-this.pBody.position.x, -this.pBody.position.y)

        //Center origin
        this.stage.translate(-this.params.width / 2, -this.params.height / 2)
        this.stage.translate(this.pBody.position.x, this.pBody.position.y)

        this.stage.rect(0, 0, this.params.width, this.params.height)
        this.stage.strokeStyle = gameConfig.neonBlue
        this.stage.lineWidth = gameConfig.lineWidth
        this.stage.stroke()
        this.stage.restore()

        this.stage.closePath()

        this.params.rot += 0.01
    }

    bind() {
        this.update = this.update.bind(this)
        this.draw = this.draw.bind(this)
        this.reset = this.reset.bind(this)
        this.onLoaded = this.onLoaded.bind(this)
    }
}