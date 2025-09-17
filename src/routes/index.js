const express = require("express");
const router = express.Router();

const v1ApiRoutes = require("./v1/index.js");

router.use('/v1', v1ApiRoutes);
// router.use('/v2',v2ApiRoutes); -> just for demonstration purposes

module.exports = router;