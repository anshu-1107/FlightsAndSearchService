const express = require("express");
const {create,destroy,get,update} = require("../../controllers/city_controller")

const router = express.Router();

router.post('/city', create);

module.exports = router;