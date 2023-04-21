const express = require('express');
const router = express.Router();

const {getprojects,getprojectdetail} = require("./../controllers/projectsController")

router.route("/getprojects").get(getprojects);
router.route("/getprojectdetail").get(getprojectdetail);


module.exports = router;