module.exports = {
  entry: {
    vendors: './src/scripts/vendors.js',
    script: './src/scripts/index.js',
    ts: './src/typescript/index.ts'
  },
  module: {
    rules: [
      {
        // TS
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      {
        // HTML Loader
        test: /\.html$/i,
        loader: 'html-loader'
      }
    ]
  }
};
