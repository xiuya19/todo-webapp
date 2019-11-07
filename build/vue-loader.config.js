module.exports = (isDev) => {
  return {
    preservewhitespace: true, // vue 去掉元素之间空格
    // cssModule: {
    //   localIdentName: isDev ? '[path]-[name]-[hash:base64:5]' : '[hash:base64:5]',//元素class名
    //   camelCase: true // - 转驼峰命名
    // },
    // hotReload: false, // 根据环境变量启动
    // loaders: {}, // 指定对应文件时使用的loader
    // preLoader: {},
    // postLoader: {},
  }
}