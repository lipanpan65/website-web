
## React配置 node-sass 的配置

### 暴露配置文件
隐藏的文件
```
yarn eject 
```
该命令是不可逆的
```
{
  loader: require.resolve('file-loader'),
  // Exclude `js` files to keep "css" loader working as it injects
  // its runtime that would otherwise be processed through "file" loader.
  // Also exclude `html` and `json` extensions so they get processed
  // by webpacks internal loaders.
  exclude: [/\.(js|mjs|jsx|ts|tsx)$/, /\.html$/, /\.json$/],
  options: {
    name: 'static/media/[name].[hash:8].[ext]',
  },
},
{
  test: /\.scss$/,
  loders:['style-loader','css-loader','sass-loader']
}
```


### 安装
```
yarn add sass-loader node-sass --save 
```











