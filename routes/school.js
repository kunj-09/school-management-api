const express = require('express');
const { addSchool } = require('../contollers/schoolControllers');
const { listSchools } = require('../contollers/schoolControllers');
const router = express.Router();

router.post('/addSchool', addSchool);


router.get('/listSchools', listSchools);


module.exports = router;
