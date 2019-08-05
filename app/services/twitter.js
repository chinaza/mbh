const Http = require('./http');
const Config = require('../../config');
const { Random } = require('../../helpers');

class Twitter {
  constructor() {
    this._setupOauthRequest();
    this.config = {
      baseUrl: 'https://api.twitter.com',
      consumerKey: Config.getVal('CONSUMER_KEY')
    };
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
}

module.exports = Twitter;
