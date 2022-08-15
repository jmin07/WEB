// EXPRESS
const express = require("express");
const router = express.Router();

// CONTROLLER
const trace = require("./traceController");

// Login Check
const {
    isLoggedIn,
    isNotLoggedIn,
} = require("../../middleware/LoginCheck/loggin");

router.post("/db", isLoggedIn, trace.postTraceItem);

router.post("/db/:id", isLoggedIn, trace.postTraceItemTable);

module.exports = router;
