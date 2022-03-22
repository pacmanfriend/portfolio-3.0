const path = require('path')

module.exports ={
    resolve: {
        alias: {
            '@assets': path.resolve(__dirname, 'src/assets'),
            '@images': path.resolve(__dirname, 'src/assets/images'),
            '@styles': path.resolve(__dirname, '/src/assets/styles'),
            '@components': path.resolve(__dirname, 'src/components'),
            '@UI': path.resolve(__dirname, 'src/components/UI'),
            '@layout':path.resolve(__dirname,'src/layout'),
            '@pages': path.resolve(__dirname, '/src/pages')
        }
    }
}