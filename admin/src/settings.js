module.exports = {
  title: "node-demo",

  /**
   * @type {boolean} true | false
   * @description Whether fix the header
   */
  fixedHeader: false,

  /**
   * @type {boolean} true | false
   * @description Whether show the logo in sidebar
   */
  sidebarLogo: false,

  proxy: {
    "/dev-api/admin": {
      target: "http://localhost:3000",
      pathRewrite: {
        "^/dev-api": ""
      }
    }
  }
};
