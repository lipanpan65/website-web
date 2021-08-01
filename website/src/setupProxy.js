const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "http://www.lipy.site",
            changeOrigin: true,
            // "pathRewrite":{
            //   "^/lg":"/"
            // }
        })
    );
};