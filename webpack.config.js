const Webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const clean = require('clean-webpack-plugin');
const webpackMerge = require('webpack-merge');


const modeConfig = env => require(`./build-utils/webpack.${env}`)(env);

/* webpack can take a function that returns an objects. 
we can pass something from cli to webpack configuration */
module.exports = ({mode, presets} = {mode: "production", presets: []}) => {
    console.log(mode);
    return webpackMerge (
        {
            mode,            
            plugins: [new clean(), new HtmlWebpackPlugin(), new Webpack.ProgressPlugin()]
          },
         
           
    );
}

/* loaders execute from right to left
style(css(less()))
['style', 'css', 'less'] */