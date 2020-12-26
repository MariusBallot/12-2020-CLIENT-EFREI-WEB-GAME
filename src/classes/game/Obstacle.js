import RAF from '../../utils/RAF'
import Matter from 'matter-js'
import gameConfig from './gameConfig'

export default class Objstacle {
    constructor(engine, ctx, i) {
        this.ctx = ctx
        this.engine = engine


        this.params = gameConfig.obstacle
        this.params.startPos.x = gameConfig.obstacles.space * i
        this.params.startPos.y = gameConfig.walls.margin + gameConfig.walls.thickness + this.params.height / 2
            + Math.random() * (window.innerHeight - 2 * (gameConfig.walls.margin + gameConfig.walls.thickness + this.params.height / 2))

        this.oBody = Matter.Bodies.rectangle(this.params.startPos.x, this.params.startPos.y, this.params.width, this.params.height, { isStatic: true })
        this.oBody.gameType = `obs`
        Matter.World.add(this.engine.world, this.oBody)
    }

    update() {
        Matter.Body.setPosition(this.oBody, { x: this.oBody.position.x - this.params.speed, y: this.oBody.position.y })

        if (this.oBody.position.x <= 0 - this.params.width) {
            Matter.Body.setPosition(this.oBody, {
                x: gameConfig.obstacles.space * gameConfig.obstacles.number,
                y: gameConfig.walls.margin + gameConfig.walls.thickness + this.params.height / 2
                    + Math.random() * (window.innerHeight - 2 * (gameConfig.walls.margin + gameConfig.walls.thickness + this.params.height / 2))
            })
        }
    }

    draw() {

        this.ctx.beginPath()
        this.ctx.save()

        //Center origin
        this.ctx.translate(-this.params.width / 2, -this.params.height / 2)
        this.ctx.translate(this.oBody.position.x, this.oBody.position.y)

        this.ctx.rect(0, 0, this.params.width, this.params.height)
        this.ctx.fill()
        this.ctx.restore()

        this.ctx.closePath()
    }

    bind() {
        this.update = this.update.bind(this)
        this.draw = this.draw.bind(this)
        this.init = this.init.bind(this)
    }
}