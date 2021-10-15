module.exports = {

    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },


    devServer: {

        disableHostCheck: true,

        // 当前你只需要知道， target 需要与我们搭建的转发域名相同即可。
        proxy: {
              '/api': {
                target: 'http://34.239.130.98:8000',//设置你调用的接口域名
  
                pathRewrite: {
                  '^/api/': ''
                }
              },
              '/foo': {
                target: 'http://ccsprint1product-env.eba-uiimqmpa.us-east-1.elasticbeanstalk.com/',//设置你调用的接口域名
                pathRewrite: {
                  '^/foo/': ''
                }
              },
              '/ord': {
                target: 'http://3.92.255.170:8000/',//设置你调用的接口域名
                pathRewrite: {
                  '^/ord/': ''
                }
              },
        }
    }
}