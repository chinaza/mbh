const express = require('express');
const router = express.Router();
const path = require('path');

const apiRouter = require('./api');

router.use(express.static(path.join(__dirname, '../public')));

router.use('/api', apiRouter);

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'MBH' });
});

module.exports = router;
