const gameConfig = {
    neonBlue: "#5EF7FF",
    neonRed: "#D14036",
    lineWidth: 3,
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
        speed: 10,
        startPos: {
            x: null,
            y: null
        }
    }
}

export default gameConfig