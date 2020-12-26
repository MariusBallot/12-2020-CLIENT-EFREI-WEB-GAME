import Matter from 'matter-js'

export default class Walls {
    constructor(engine, ctx) {
        this.bind()
        this.engine = engine
        this.ctx = ctx

        this.params = {
            thickness: 10,
            margin: 20,
        }

        this.topBody = Matter.Bodies.rectangle(window.innerWidth / 2, this.params.margin + this.params.thickness / 2,
            window.innerWidth - this.params.margin * 2, this.params.thickness,
            { isStatic: true })
        this.botBody = Matter.Bodies.rectangle(window.innerWidth / 2, window.innerHeight - this.params.margin - this.params.thickness / 2,
            window.innerWidth - this.params.margin * 2, this.params.thickness,
            { isStatic: true })



        Matter.World.add(this.engine.world, [this.topBody, this.botBody])
    }

    draw() {
        this.ctx.beginPath()
        this.ctx.rect(this.params.margin, this.params.margin, window.innerWidth - this.params.margin * 2, this.params.thickness)
        this.ctx.rect(this.params.margin, window.innerHeight - this.params.margin - this.params.thickness, window.innerWidth - this.params.margin * 2, this.params.thickness)
        this.ctx.fill()
        this.ctx.closePath()

    }

    bind() {

    }
}