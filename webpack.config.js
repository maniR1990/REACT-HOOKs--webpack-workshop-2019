const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');



/* webpack can take a function that returns an objects. 
we can pass something from cli to webpack configuration */
module.exports = ({mode}) => {
    console.log(mode);
    return {
        mode,
        output : {
            filename: 'bundle.js'
        },
        plugins: [
            new HtmlWebpackPlugin(),
            new Webpack.ProgressPlugin()
        ]
    }
}

/* loaders execute from right to left
style(css(less()))
['style', 'css', 'less'] */