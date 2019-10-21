const express = require('express');
const router = express.Router();

const gigsCtrl = require('../../app/controllers/gigs-twitter');

router.get('/gigs', gigsCtrl.queryGigs);

router.use((req, res) => {
  return res.status(404).send({
    mnessage: `You've reached a non-existent API resource. #GigsTwitter™️`
  });
});

module.exports = router;
