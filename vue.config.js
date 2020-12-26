var path = require('path')

module.exports = {
    devServer: {
        https: true
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