const express = require('express');
const router = express.Router();

router.route("/getuserdata").get(getUser);


module.exports = router;