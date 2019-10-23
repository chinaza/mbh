const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const gigsClick = new Schema({
  twitterId: {
    type: String
  },
  text: {
    type: String
  },
  hashtags: {
    type: Array
  },
  urls: {
    type: Array
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('gigs-click', gigsClick);
