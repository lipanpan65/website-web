const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "39.105.168.100:6868",
            changeOrigin: true,
            // "pathRewrite":{
            //   "^/lg":"/"
            // }
        })
    );
};