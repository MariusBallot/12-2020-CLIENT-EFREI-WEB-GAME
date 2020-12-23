import Matter from 'matter-js'
import Controls from './Controls'
import RAF from '@/utils/RAF'

export default class Player {
    constructor(engine) {
        this.bind()
        this.boxA = Matter.Bodies.rectangle(100, window.innerHeight / 2, 80, 80);
        Matter.World.add(engine.world, this.boxA)

        RAF.subscribe("playerUpdate", this.update)
    }

    update() {
        if (Controls.inputs.up)
            Matter.Body.applyForce(this.boxA, this.boxA.position, { x: 0, y: -0.01 })
        if (Controls.inputs.down)
            Matter.Body.applyForce(this.boxA, this.boxA.position, { x: 0, y: 0.01 })

        Matter.Body.setAngle(this.boxA, this.boxA.velocity.y * .01)
    }

    bind() {
        this.update = this.update.bind(this)
    }
}