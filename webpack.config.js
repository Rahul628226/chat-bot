import path from 'path';

export default {
  entry: './src/Widget.js',
  output: {
    path: path.resolve('dist'),
    filename: 'my-react-widget.umd.js',
    library: 'MyReactWidget',
    libraryTarget: 'umd',
    umdNamedDefine: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // include .jsx
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // resolve imports without extensions
  },
  // REMOVE externals completely
};
