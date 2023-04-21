const express = require('express');
const router = express.Router();

const {getuserdata} = require("./../controllers/usersController")

router.route("/getuserdata").get(getuserdata);


module.exports = router;