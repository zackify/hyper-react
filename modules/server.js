import Webpack from 'webpack-dev-server';
import WebpackDevServer from 'webpack-dev-server';
import config from './webpack.config';

export default () => {
  var server = new WebpackDevServer(Webpack(config), {
    hot: true,
    host: '0.0.0.0',
    contentBase: resolve(__dirname),
    publicPath: '/',
    historyApiFallback: {
      index: 'index.html',
    },
  });
  server.listen(8888, 'localhost', function() {});
};
