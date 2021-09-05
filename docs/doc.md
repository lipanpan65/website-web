
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


### 配置环境变量

```


```

### React cookie 的使用
https://zhuanlan.zhihu.com/p/151282186
安装
```
yarn add react-cookies --save-dev
```
引入
```
import cookie from 'react-cookies'
```
存入
```
cookie.save('userId', "123")；
```
取
```
cookie.load('userId')
```
删除
```
cookie.remove('userId')
```
失效
```
let inFifteenMinutes = new Date(new Date().getTime() + 24 * 3600 * 1000);//一天
cookie.save('userId', "123",{ expires: inFifteenMinutes })；
```

### 关于Promise的
https://juejin.cn/post/6999804617320038408


### 常用的Javascript 16个片段
https://juejin.cn/post/7000919400249294862


### Yarn的前世今生
https://juejin.cn/post/7002864752972005407


### 请求拦截器
https://juejin.cn/post/6998334271538593828


<!-- https://www.bilibili.com/video/BV1Hg4y167v6?p=16&spm_id_from=pageDriver -->