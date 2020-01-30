const fs = require('fs');
module.exports = {
  publicPath: '',
  pluginOptions: {
    cordovaPath: 'src-cordova'
  },
  devServer: {
    http2: true,
    https: {
      key: fs.readFileSync('./src/config/ssl/key.key'),
      cert: fs.readFileSync('./src/config/ssl/cert.crt')
    },
    disableHostCheck: true
  }
}
