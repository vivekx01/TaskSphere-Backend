const express = require('express');
const router = express.Router();

const {getprojectissues} = require("./../controllers/issuesController")

router.route("/getprojectissues").get(getprojectissues);


module.exports = router;