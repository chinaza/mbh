const express = require('express');
const router = express.Router();

const gigsCtrl = require('../../app/controllers/gigs-twitter');

router.get('/gigs', gigsCtrl.queryGigs);

module.exports = router;
