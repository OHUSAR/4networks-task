// eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: "https://www.zahrada.sk/graphql",
      changeOrigin: true,
    })
  );
};
