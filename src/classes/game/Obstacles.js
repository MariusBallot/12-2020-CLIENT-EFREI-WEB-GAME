import Obstacle from './Obstacle'
import gameConfig from './gameConfig'

class Objstacles {
    constructor() {
        this.bind()

        this.group = []
        this.params = gameConfig.obstacles
    }

    init(engine, ctx, pBody) {
        this.engine = engine
        this.ctx = ctx
        this.pBody = pBody

        for (let i = 0; i < this.params.number; i++) {
            let obs = new Obstacle(this.engine, this.ctx, i)
            this.group.push(obs)
        }

    }

    update() {
        let i = 0;
        while (i < this.params.number) {
            this.group[i].update()
            i++
        }
    }

    draw() {
        let i = 0;
        while (i < this.params.number) {
            this.group[i].draw()
            i++
        }
    }

    bind() {
        this.update = this.update.bind(this)
        this.init = this.init.bind(this)
    }
}

const _instance = new Objstacles()
export default _instance