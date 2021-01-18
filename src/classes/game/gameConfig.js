const viewer = {
    w: window.innerWidth,
    h: window.innerHeight
}

const gameConfig = {
    viewer: viewer,
    neonBlue: "#5EF7FF",
    neonRed: "#D14036",
    matterDebug: true,
    lineWidth: 3,
    player: {
        width: viewer.w * 0.07,
        aR: 0.5,
        rot: 0,
        startPos: { x: 200, y: window.innerHeight / 2 }
    },
    walls: {
        thickness: 10,
        vertMargin: 100,
        horMargin: 10,
    },
    obstacles: {
        number: 5,
        space: 500,
        startSpace: 2000
    },
    obstacle: {
        width: 40,
        height: 200,
        startSpeed: 10,
        speed: 0,
        startPos: {
            x: null,
            y: null
        }
    }
}

export default gameConfig