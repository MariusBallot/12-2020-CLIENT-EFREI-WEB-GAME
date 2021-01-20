import Obstacle from './Obstacle'
import GameConfig from './GameConfig'

class Objstacles {
    constructor() {
        this.bind()

        this.group = []
    }

    init(engine, stage) {
        this.engine = engine
        this.stage = stage

        for (let i = 0; i < GameConfig.obstacles.horNumber; i++) {
            let obs = new Obstacle(this.engine, this.stage, i)
            this.group.push(obs)
        }

    }

    reset() {
        let i = 0;
        while (i < GameConfig.obstacles.horNumber) {
            this.group[i].reset()
            i++
        }
    }

    stop() {
        this.group = []
    }

    update() {
        let i = 0;
        while (i < GameConfig.obstacles.horNumber) {
            this.group[i].update()
            i++
        }
    }

    resize() {
        let i = 0;
        while (i < GameConfig.obstacles.horNumber) {
            this.group[i].resize()
            i++
        }
    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
        this.reset = this.reset.bind(this)
        this.resize = this.resize.bind(this)
        this.stop = this.stop.bind(this)
    }
}

const _instance = new Objstacles()
export default _instance