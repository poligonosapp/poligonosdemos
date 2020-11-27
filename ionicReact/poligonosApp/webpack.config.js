module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|json|geojson)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  },
};