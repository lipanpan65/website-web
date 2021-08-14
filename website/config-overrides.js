
const {override,fixBabelImports,addLessLoader} = require("customize-cra")

// addLessLoader
// https://www.jianshu.com/p/3a8dbdf292cc

module.exports = override(
    fixBabelImports("import",{
        libraryName:"antd",
        libraryDirectory:"es",
        style:"css",
    }),

    addLessLoader({
      javascriptEnabled: true,
      // modifyVars: { "@primary-color": "#1DA57A" },
    })
  
)


