'use strict';

const getConfig = require('./configUtils/getConfig');

// Example using the async function getConfig();
getConfig('checkout', 'anpl', 'production')
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.log(err.message);
  });
