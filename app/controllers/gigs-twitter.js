const twitter = require('../services/twitter');
const { Err } = require('../../helpers');
const requestCountry = require('request-country');
const { getName } = require('country-list');

const GigsClick = require('../models/mongo/gigs-click');

module.exports = {
  async queryGigs(req, res) {
    try {
      // eslint-disable-next-line prefer-const
      let { q = '', pos } = req.body;
      let country = requestCountry(req);
      country = country ? getName(country) : '';

      // Build job seaarch query
      q = `(${q} ${country ||
        ''}) ((ongoing OR URGENT OR job OR role) (recruitment OR vacancy OR hiring OR alert)) -brexit -((who OR anyone) knows) -filter:retweets`;

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
  },

  async logTweetClicks(req, res) {
    try {
      const { twId } = req.body;

      if (!twId) Err.ctrlError(`Invalid twId`, 400);

      const tweet = await twitter.getTweet(twId);

      const dbObj = {
        twitterId: twId,
        text: tweet.text,
        hashtags: tweet.entities.hashtags.map(h => h.text),
        urls: tweet.entities.urls.map(u => u.url)
      };

      await GigsClick.create(dbObj);

      return res.send({ message: 'Successful' });
    } catch (error) {
      return Err.ctrlErrorResponse(error, res);
    }
  }
};
