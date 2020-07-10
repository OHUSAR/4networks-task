// eslint-disable-next-line
const { createProxyMiddleware } = require("http-proxy-middleware");
module.exports = function (app) {
  app.use(
    "/graphql",
    createProxyMiddleware({
      target: process.env.DEV_GQL_ENDPOINT,
      changeOrigin: true,
    })
  );
};
