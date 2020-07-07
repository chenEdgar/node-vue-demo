module.exports = (app) => {
  const express = require("express");
  const router = express.Router();

  const Category = require("../../models/Category");

  router.post("/categorise", async (req, res) => {
    const model = await Category.create(req);
    res.send(model);
  });

  app.use("/admin/api", router);
};
