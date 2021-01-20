class GameConfig {
    constructor() {
        this.viewer = {
            w: window.innerWidth,
            h: window.innerHeight
        }

        this.startSpeed = 10
        this.speed = 0
        this.neonBlue = 0x5EF7FF
        this.neonRed = 0xD14036
        this.matterDebug = false
        this.lineWidth = 3
        this.setValues()
    }

    setValues() {

        this.player = {
            width: this.viewer.w * 0.05,
            aR: 0.5,
            rot: 0,
            startPos: { x: this.viewer.w * 0.2, y: window.innerHeight / 2 }
        }
        this.walls = {
            thickness: this.viewer.h * 0.03,
            vertMargin: this.viewer.h * 0.09,
            horMargin: this.viewer.h * 0.03,
        }
        this.obstacles = {
            horNumber: 5,
            space: this.viewer.w * .5,
            startSpace: 2000,
            vertNumber: 4
        }
        this.obstacle = {
            width: this.viewer.w * .03,

            startPos: {
                x: null,
                y: null
            }
        }
    }
    updateValues() {
        this.viewer = {
            w: window.innerWidth,
            h: window.innerHeight
        }
        this.setValues()
    }

    bind() {
        this.setValues = this.setValues.bind(this)
        this.updateValues = this.updateValues.bind(this)
    }
}

const _instance = new GameConfig()

export default _instance