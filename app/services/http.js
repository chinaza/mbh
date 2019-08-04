const axios = require('axios').default;

class Http {
  constructor(baseUrl, headers) {
    this.http = axios.create({
      baseUrl,
      headers
    });
  }

  async makeRequest({ url, data = {}, method = 'get', headers = {} }) {
    try {
      const reqParams = { [method == 'get' ? 'params' : 'data']: data };

      const result = await this.http.request({
        url,
        method,
        ...reqParams
      });

      return { response: result.data, status: result.status };
    } catch (error) {
      switch (true) {
        case error.response:
          throw new Error(
            error.response.data
              ? error.response.data.message
              : error.response.data
          );
        case error.request:
          throw new Error(error.message);
        default:
          throw new Error('An error occured processing your request');
      }
    }
  }
}

module.exports = Http;
