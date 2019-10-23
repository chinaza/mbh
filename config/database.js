const mongoose = require('mongoose');

module.exports = class Database {
  constructor({ mongoParams }) {
    this.initMongo(mongoParams);
  }
  initMongo(uri) {
    mongoose.connect(
      uri,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true
      },
      err => {
        if (err) return console.error(err);
        console.log('Mongo connected!');
      }
    );
  }
};
