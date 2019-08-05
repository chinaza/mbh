require('dotenv').config();

class Config {
  static getVal(key) {
    return process.env[key];
  }
}

module.exports = Config;
