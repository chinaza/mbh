require('dotenv').config();
const DB = require('./database');

class Config {
  static getVal(key) {
    return process.env[key];
  }

  constructor() {
    new DB({ mongoParams: Config.getVal('MONGO_CONN_STR') });
  }
}

module.exports = Config;
