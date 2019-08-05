const cryptoRandomString = require('crypto-random-string');

module.exports = {
  /**
   * @param  {Number} length
   * @param  {'base64|hex'} type='base64'
   */
  generateString(length, type = 'base64') {
    return cryptoRandomString({ length, type });
  }
};
