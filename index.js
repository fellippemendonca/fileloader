'use strict';

const path = './files';
const GlobalConfig = require('./init/globalConfig');


let globalConfig = new GlobalConfig();

let finalResult = globalConfig.load(path)
  .then(() => { return globalConfig.getConfig('forms', 'bkit', 'production') });

  finalResult.then(res => { console.log(res)  });
