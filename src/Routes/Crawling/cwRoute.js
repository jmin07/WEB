// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const cwController = require("./cwController");

router.post("/test", cwController.postSearchItem);

module.exports = router;
