import Matter from 'matter-js'
import gameConfig from './gameConfig'

export default class Walls {
    constructor(engine, ctx) {
        this.bind()
        this.engine = engine
        this.ctx = ctx

        this.params = gameConfig.walls

        this.topBody = Matter.Bodies.rectangle(window.innerWidth / 2, this.params.vertMargin + this.params.thickness / 2,
            window.innerWidth - this.params.vertMargin * 2, this.params.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight - this.params.vertMargin - this.params.thickness / 2,
            window.innerWidth - this.params.vertMargin * 2, this.params.thickness,
            { isStatic: true })



        Matter.World.add(this.engine.world, [this.topBody, this.botBody])
    }

    draw() {
        this.ctx.beginPath()

        this.ctx.save()
        this.ctx.translate(-(window.innerWidth - this.params.horMargin * 2) / 2, -this.params.thickness / 2)
        this.ctx.translate(this.topBody.position.x, this.topBody.position.y)
        this.ctx.rect(0, 0, window.innerWidth - this.params.horMargin * 2, this.params.thickness)
        this.ctx.restore()

        this.ctx.save()
        this.ctx.translate(-(window.innerWidth - this.params.horMargin * 2) / 2, -this.params.thickness / 2)
        this.ctx.translate(this.botBody.position.x, this.botBody.position.y)
        this.ctx.rect(0, 0, window.innerWidth - this.params.horMargin * 2, this.params.thickness)
        this.ctx.restore()

        this.ctx.fill()
        this.ctx.closePath()

    }

    bind() {

    }
}