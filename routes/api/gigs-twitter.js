const express = require('express');
const router = express.Router();

const gigsCtrl = require('../../app/controllers/gigs-twitter');

router.post('/gigs', gigsCtrl.queryGigs);
router.post('/log/gigclick', gigsCtrl.logTweetClicks);

router.use((req, res) => {
  return res.status(404).send({
    mnessage: `You've reached a non-existent API resource. #GigsTwitter™️`
  });
});

module.exports = router;
