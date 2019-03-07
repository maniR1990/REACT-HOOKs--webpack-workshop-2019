module.exports = () => ({
  
    module: {
        output: {
            filename: "bundle.js"
          },
          
      rules: [
        {
          test: /\.css$/,
          use: ["style-loader", "css-loader"]
        }
      ]
    }
  });