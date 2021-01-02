var path = require('path')

module.exports = {
    devServer: {
        https: true,
        proxy: {
            "/api": {
                target: "http://localhost:3000"
            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                use: [require('rupture')()],
                import: ['~rupture/rupture/index.styl'],
                import: [path.resolve(__dirname, "src/utils/variables")]
            }
        }
    },

}