const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            // target: "http://localhost:6868",
            // target: "http://localhost:6868",
            target: "http://39.105.100.168:6868/",
            changeOrigin: true,
            // "pathRewrite":{
            //   "^/lg":"/"
            // }
        })
    );
};