const path = require('path');
const SentryCliPlugin = require('@sentry/webpack-plugin');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  productionSourceMap: process.env.NODE_ENV !== 'development',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:5000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '-': path.resolve(__dirname, 'src/common'),
        '~': path.resolve(__dirname, 'src/components')
      }
    },
    plugins: [
      // new SentryCliPlugin({
      //   include: './dist/js', // 只上传js
      //   ignore: ['node_modules', 'webpack.config.js', 'vue.config.js'],
      //   ignoreFile: '.sentrycliignore',
      //   release: process.env.SENTRY_VERSION || '0.0.1', // 版本号，每次都npm run build上传都修改版本号 对应main.js中设置的Sentry.init版本号
      //   cleanArtifacts: true, // Remove all the artifacts in the release before the upload.
      //   // URL prefix to add to the beginning of all filenames. Defaults to ~/ but you might want to set this to the full URL. This is also useful if your files are stored in a sub folder. eg: url-prefix '~/static/js'
      //   urlPrefix: '~/dist/js' // 线上对应的url资源的相对路径 注意修改这里，否则上传sourcemap还原错误信息有问题
      //   // urlPrefix： 关于这个，是要看你线上项目的资源地址，比如
      //   // 怎么看资源地址呢， 例如谷歌浏览器， F12控制台， 或者去Application里面找到对应资源打开
      // })
    ]
  }
};
