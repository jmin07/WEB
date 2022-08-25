// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const cwController = require("./cwController");

router.get("/search", cwController.postSearchItem);

module.exports = router;
