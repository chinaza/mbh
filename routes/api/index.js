const express = require('express');
const router = express.Router();

const gigsTwitter = require('./gigs-twitter');

router.use('/gigs-twitter', gigsTwitter);

router.use((req, res) => {
  return res.status(404).send({
    mnessage: `You've reached a non-existent API resource. MBH™️`
  });
});

module.exports = router;
