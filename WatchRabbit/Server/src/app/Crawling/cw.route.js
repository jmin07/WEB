// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const cwController = require("./cw.controller");

router.get("/search", cwController.postSearchItem);

module.exports = router;
