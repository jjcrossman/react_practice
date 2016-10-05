module.exports = {
  entry: [
    "./src/app.js"
  ]
  , output: {
    path: __dirname
    , filename: "bundle.js"
  }
  , module: {
    loader: [
      {
        test: /\.jsx?$/
        , loader: "babel"
      }
    ]
  }
};
