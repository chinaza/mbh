const twitter = require('../services/twitter');
const { Err } = require('../../helpers');
const requestCountry = require('request-country');
const { getName } = require('country-list');

module.exports = {
  async queryGigs(req, res) {
    try {
      let { q = '', pos } = req.body;
      let country = requestCountry(req);
      country = country ? getName(country) : '';

      // Build job seaarch query
      q = `(${q} ${country ||
        ''}) ((ongoing OR URGENT OR job OR role) (recruitment OR vacancy OR hiring)) -brexit -(who OR anyone knows ?) -filter:retweets`;

      let opts = {};
      if (pos) {
        opts = { geocode: `${pos.latitude},${pos.longitude},1000km` };
      }

      const tweets = await twitter.searchTweets({
        q,
        opts
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
