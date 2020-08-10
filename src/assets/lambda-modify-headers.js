'use strict';

exports.handler = (event, context, callback) => {
  const response = event.Records[0].cf.response;

  response.headers['server'] = [
    {
      key: 'Server',
      value: 'Zelcie Server',
    },
  ];

  response.headers['Strict-Transport-Security'] = [
    {
      key: 'Strict-Transport-Security',
      value: 'max-age=31536000; includeSubDomains; preload',
    },
  ];

  response.headers['Content-Security-Policy'] = [
    {
      key: 'Content-Security-Policy',
      value: 'upgrade-insecure-requests',
    },
  ];

  response.headers['X-XSS-Protection'] = [
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
  ];

  response.headers['X-Content-Type-Options'] = [
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
  ];

  response.headers['X-Frame-Options'] = [
    {
      key: 'X-Frame-Options',
      value: 'DENY',
    },
  ];

  response.headers['Referrer-Policy'] = [
    {
      key: 'Referrer-Policy',
      value: 'no-referrer-when-downgrade',
    },
  ];

  callback(null, response);
};
