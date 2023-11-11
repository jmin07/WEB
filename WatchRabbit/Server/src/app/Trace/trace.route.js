// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const trace = require("./trace.controller");

// Login Check
const {
    isLoggedIn,
    isNotLoggedIn,
} = require("../../middleware/verification/authentication/index");

router.post("/db", isLoggedIn, trace.postTraceItem);

router.post("/db/:id", isLoggedIn, trace.postTraceItemTable);

module.exports = router;
