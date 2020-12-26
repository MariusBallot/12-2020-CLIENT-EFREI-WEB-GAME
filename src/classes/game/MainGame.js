import RAF from '@/utils/RAF'
import Matter from "matter-js"
import config from "@/utils/config";
import { TweenLite } from 'gsap'

import Player from './Player'
import Walls from './Walls'
import Obstacles from './Obstacles'
import gameConfig from './gameConfig';


class MainGame {
    constructor() {
        this.bind()



        this.params = {

        }
    }


    init(domCanvas, debugCanvas) {
        this.domCanvas = domCanvas
        this.debugCanvas = debugCanvas
        this.ctx = this.domCanvas.getContext('2d')
        this.cWidth = this.ctx.canvas.width = window.innerWidth
        this.cHeight = this.ctx.canvas.height = window.innerHeight

        this.engine = Matter.Engine.create();
        this.engine.world.gravity.y = 0;

        this.debugRender = Matter.Render.create({
            engine: this.engine,
            element: this.debugCanvas,
            options: {
                width: window.innerWidth,
                height: window.innerHeight
            }
        })

        if (config.matterDebug)
            Matter.Render.run(this.debugRender)

        this.player = new Player(this.engine, this.ctx)
        this.walls = new Walls(this.engine, this.ctx)
        Obstacles.init(this.engine, this.ctx, this.player.pBody)

        Matter.Events.on(this.engine, 'collisionStart', (event) => {
            if (event.pairs[0].bodyA.gameType == "obs" || event.pairs[0].bodyB.gameType == "obs") {
                alert("perdu bo")
                gameConfig.obstacle.speed = 0

            }

        })

        RAF.subscribe("gameUpadate", this.update)

    }

    update() {
        Matter.Engine.update(this.engine);


        this.player.update()
        Obstacles.update()
        this.draw()
    }

    draw() {
        this.ctx.clearRect(0, 0, this.cWidth, this.cHeight);
        this.player.draw()
        this.walls.draw()
        Obstacles.draw()
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