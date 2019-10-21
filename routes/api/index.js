const express = require('express');
const router = express.Router();

const gigsTwitter = require('./gigs-twitter');

router.use('/gigs-twitter', gigsTwitter);

module.exports = router;
