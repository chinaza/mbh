const express = require('express');
const router = express.Router();
const path = require('path');

const apiRouter = require('./api');

router.use(express.static(path.join(__dirname, '../public')));
router.use(express.static(path.join(__dirname, '../client')));

router.use('/api', apiRouter);

/* GET home page. */
router.use('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

router.get('/**', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
});

module.exports = router;
