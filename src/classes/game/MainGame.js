import RAF from '@/utils/RAF'
import Matter from "matter-js"

import Player from './Player'

class MainGame {
    constructor() {
        this.bind()



        this.params = {

        }
    }

    init(domCanvas) {
        // this.domCanvas = domCanvas
        // this.ctx = this.domCanvas.getContext('2d')
        // this.cWidth = this.ctx.canvas.width = window.innerWidth
        // this.cHeight = this.ctx.canvas.height = window.innerHeight

        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0;

        this.render = Matter.Render.create({
            element: domCanvas,
            engine: this.engine,
            options: {
                width: window.innerWidth,
                height: window.innerHeight,
                wireframes: false
            }
        });

        this.player = new Player(this.engine)

        // run the this.engine
        Matter.Engine.run(this.engine);
        Matter.Render.run(this.render);

        RAF.subscribe("gameUpadate", this.update)
        window.addEventListener('resize', this.resize)

    }

    update() {
        // this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        this.ctx.fillRect(100, 100, 1000, 10)
    }

    stop() {
    }

    resize() {
        this.cWidth = this.ctx.canvas.width = window.innerWidth
        this.cHeight = this.ctx.canvas.height = window.innerHeight
    }

    bind() {
        this.update = this.update.bind(this)
        this.draw = this.draw.bind(this)
        this.init = this.init.bind(this)
        this.resize = this.resize.bind(this)
    }
}

const _instance = new MainGame()
export default _instance