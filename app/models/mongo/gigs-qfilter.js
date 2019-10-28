const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gigsQfilter = new Schema({
  keyword: {
    type: String
  }
});

module.exports = mongoose.model('gigs-qfilter', gigsQfilter);
