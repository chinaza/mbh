module.exports = {
  b64Encode(str = '') {
    return Buffer.from(str).toString('base64');
  },

  b64Decode(str = '') {
    return Buffer.from(str, 'base64').toString('ascii');
  }
};
