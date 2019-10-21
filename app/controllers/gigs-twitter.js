const twitter = require('../services/twitter');
const { Err } = require('../../helpers');
const requestCountry = require('request-country');

module.exports = {
  async queryGigs(req, res) {
    try {
      let { q = '' } = req.query;
      const country = requestCountry(req);

      // Build job seaarch query
      q = `(${q} ${country ||
        ''}) ((ongoing OR URGENT OR job OR role OR work) (recruitment OR vacancy OR hiring))`;

      const tweets = await twitter.searchTweets({
        q
      });

      return res.send({
        message: 'successful',
        data: { tweets }
      });
    } catch (error) {
      return Err.ctrlErrorResponse(error, res);
    }
  }
};
