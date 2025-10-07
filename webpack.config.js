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
        test: /\.(js|jsx)$/,
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
        use: [
          {
            loader: 'css-loader',
            options: {
              exportType: 'string',
              importLoaders: 1,
            },
          },
          'postcss-loader',
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // <-- resolve imports without extensions
  },
  externals: {
    react: 'React',
    'react-dom': 'ReactDOM',
  },
};
