import Matter from 'matter-js'
import * as PIXI from "pixi.js"
import Controls from './Controls'
import GameConfig from './GameConfig'
import { store } from '../../store/store'


export default class Player {
    constructor(engine, stage) {
        this.bind()
        this.engine = engine
        this.stage = stage
        this.lost = false
        this.loader = PIXI.Loader.shared

        this.pBody = Matter.Bodies.rectangle(GameConfig.player.startPos.x, GameConfig.player.startPos.y, GameConfig.player.width, GameConfig.player.width * GameConfig.player.aR);
        this.pBody.frictionAir = 0.2
        this.pBody.mass = 10
        this.pBody.gameType = "player"
        Matter.World.add(this.engine.world, this.pBody)

        console.log(store.state.currUser.skinObj.image[0].url)
        this.loader.add('pSkin', store.state.currUser.skinObj.image[0].url)
        this.loader.load(this.onLoaded)

        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            player: GameConfig.player
        }
    }

    onLoaded(loader, resources) {
        console.log(resources)
        this.pSkin = new PIXI.Sprite(resources.pSkin.texture)
        this.pSkin.anchor.set(.5, .5)
        this.pSkin.width = GameConfig.player.width
        this.pSkin.height = GameConfig.player.width * GameConfig.player.aR
        this.pSkin.position.set(this.pBody.position.x, this.pBody.position.y)
        this.stage.addChild(this.pSkin)
    }
    reset() {
        this.pBody.frictionAir = 0.2
        this.lost = false
        Matter.Body.setPosition(this.pBody, {
            x: GameConfig.player.startPos.x,
            y: GameConfig.player.startPos.y
        })
    }

    update() {
        if (this.pSkin == undefined)
            return

        if (!this.lost) {
            if (Controls.inputs.up)
                Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: -.1 })
            if (Controls.inputs.down)
                Matter.Body.applyForce(this.pBody, this.pBody.position, { x: 0, y: .1 })
            Matter.Body.setPosition(this.pBody, { x: GameConfig.player.startPos.x, y: this.pBody.position.y })
            Matter.Body.setAngle(this.pBody, this.pBody.velocity.y * 0.01)
        }

        this.pSkin.position.set(this.pBody.position.x, this.pBody.position.y)
        this.pSkin.rotation = this.pBody.angle
    }

    resize() {

        Matter.Body.scale(this.pBody, 1 / (this.prevConfig.player.width), 1 / (this.prevConfig.player.width * this.prevConfig.player.aR))
        Matter.Body.scale(this.pBody, GameConfig.player.width, GameConfig.player.width * GameConfig.player.aR)

        this.pSkin.width = GameConfig.player.width
        this.pSkin.height = GameConfig.player.width * GameConfig.player.aR

        this.pBody.mass = 10

        this.prevConfig = {
            viewer: {
                w: GameConfig.viewer.w,
                h: GameConfig.viewer.h
            },
            player: GameConfig.player
        }

    }

    bind() {
        this.update = this.update.bind(this)
        this.reset = this.reset.bind(this)
        this.resize = this.resize.bind(this)
        this.onLoaded = this.onLoaded.bind(this)
    }
}