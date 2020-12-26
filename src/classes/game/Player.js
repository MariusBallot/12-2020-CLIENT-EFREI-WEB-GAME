import Matter from 'matter-js'
import Controls from './Controls'

export default class Player {
    constructor(engine, ctx) {
        this.bind()
        this.engine = engine
        this.ctx = ctx

        this.params = {
            width: 100,
            height: 50,
            rot: 0,
            startPos: { x: 200, y: window.innerHeight / 2 }
        }
        this.pBody = Matter.Bodies.rectangle(this.params.startPos.x, this.params.startPos.y, this.params.width, this.params.height);
        this.pBody.frictionAir = 0.2
        this.pBody.gameType = "player"
        Matter.World.add(this.engine.world, this.pBody)

    }

    update() {
        if (Controls.inputs.up)
            Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: -.1 })
        if (Controls.inputs.down)
            Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: .1 })

        Matter.Body.setAngle(this.pBody, this.pBody.velocity.y * 0.01)
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.save()

        //Center rotation
        this.ctx.translate(this.pBody.position.x, this.pBody.position.y)
        this.ctx.rotate(this.pBody.velocity.y * 0.01)
        this.ctx.translate(-this.pBody.position.x, -this.pBody.position.y)

        //Center origin
        this.ctx.translate(-this.params.width / 2, -this.params.height / 2)
        this.ctx.translate(this.pBody.position.x, this.pBody.position.y)

        this.ctx.rect(0, 0, this.params.width, this.params.height)
        this.ctx.fill()
        this.ctx.restore()

        this.ctx.closePath()

        this.params.rot += 0.01
    }

    bind() {
        this.update = this.update.bind(this)
        this.draw = this.draw.bind(this)
    }
}