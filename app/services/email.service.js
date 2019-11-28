/* eslint-disable camelcase */
const path = require('path');
const ejs = require('ejs');
const Validator = require('validator');

const Config = require('../../config');
const Http = require('./http');

class Email {
  constructor(
    from = {
      name: '#GigsTwitter',
      email: 'no-reply@twgigs.com'
    }
  ) {
    this.from = from;
    this.emailApi = new Http('https://api.sendgrid.com/v3', {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: `Bearer ${Config.getVal('SENDGRID_API_KEY')}`
    });
  }

  getHTMLBody(templateName = '', templateData = {}) {
    templateName = path.join(__dirname, `../mails/${templateName}.mail.ejs`);
    // Generate mail template
    return new Promise((resolve, reject) => {
      ejs.renderFile(templateName, templateData, (err, str) => {
        if (err) return reject(err);

        return resolve(str);
      });
    });
  }

  /**
   *
   * @throws {{code: Number, status: String, reject_reason: String, _id: String}}
   */
  async sendEmailTemplate({
    to,
    templateName,
    templateData = {},
    subject = '#GigsTwitter - New Vacancies',
    opts = {}
  }) {
    const invalidRecipients = [];

    try {
      if (!templateName || to.length < 1)
        throw new Error('Invalid email parameters');

      to = to.filter(recipient => {
        const isValidEmail = Validator.isEmail(recipient.email);
        if (!isValidEmail) invalidRecipients.push(recipient.email);

        return isValidEmail;
      });

      const html = await this.getHTMLBody(templateName, templateData);

      const mailData = {
        personalizations: [{ to }],
        subject,
        from: this.from,
        content: [
          {
            type: 'text/html',
            value: html
          }
        ],
        tracking_settings: {
          click_tracking: {
            enable: true
          },
          open_tracking: {
            enable: true
          }
        },
        ...opts
      };

      const response = await this.emailApi.makeRequest(
        '/mail/send',
        mailData,
        'post'
      );

      return response.nStatusCode === 202;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = Email;
