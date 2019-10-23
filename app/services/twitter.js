const Http = require('./http');
const Config = require('../../config');
const qs = require('querystring');

const { Random, Crypt } = require('../../helpers');

class Twitter {
  constructor() {
    this.config = {
      baseUrl: 'https://api.twitter.com',
      consumerKey: Config.getVal('TW_CONSUMER_KEY'),
      bearerToken: '',
      consumerSecret: Config.getVal('TW_CONSUMER_SECRET')
    };
    // this._setupOauthRequest();

    this.http = new Http(this.config.baseUrl);

    this._generateAppAuthToken();
  }

  _buildOauthAuthString({ callbackUrl }) {
    const oauth_nonce = Random.generateString(32);
    const signature = '';

    return `OAuth oauth_callback="${encodeURIComponent(callbackUrl)}",
    oauth_consumer_key="${this.config.consumerKey}",
    oauth_nonce="${oauth_nonce}",
    oauth_signature="${signature}",
    oauth_signature_method="HMAC-SHA1",
    oauth_timestamp="${Date.now()}",
    oauth_version="1.0"`;
  }

  _setupOauthRequest() {
    this.oauthHttp = new Http(`${this.config.baseUrl}/oauth`, {});
  }

  async _generateAppAuthToken() {
    try {
      const { response } = await this.http.makeRequest({
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Authorization: `Basic ${Crypt.b64Encode(
            `${this.config.consumerKey}:${this.config.consumerSecret}`
          )}`
        },
        method: 'post',
        url: '/oauth2/token',
        data: qs.stringify({
          grant_type: 'client_credentials'
        })
      });

      this.config.bearerToken = response.access_token;
    } catch (error) {
      throw error;
    }
  }

  async searchTweets({ q, limit = 100, sort = 'recent', opts = {} }) {
    try {
      const { response } = await this.http.makeRequest({
        headers: {
          Authorization: `Bearer ${this.config.bearerToken}`
        },
        method: 'get',
        data: {
          q,
          count: limit,
          result_type: sort,
          ...opts
        },
        url: '/1.1/search/tweets.json'
      });

      return response.statuses;
    } catch (error) {
      throw error;
    }
  }

  async getTweet(id) {
    try {
      const { response } = await this.http.makeRequest({
        url: '/1.1/statuses/show.json',
        headers: {
          Authorization: `Bearer ${this.config.bearerToken}`
        },
        method: 'get',
        data: {
          id
        }
      });

      return response;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new Twitter();
