'use strict';

const path = './files';
const fsOperations = require('./lib/fsOperations');
const fileSynthesizer = require('./lib/fileSynthesizer');
const siteIds = ['anpl', 'bkbe', 'bkit'];

let globalConfig;


fsOperations.mapFiles(path)
  .then(files => {
    let synthesized = fileSynthesizer.synthesize(files)

    synthesized.map(sinth => {
      globalConfig = insert(globalConfig, sinth);
      //console.log('\n ------------------------ Reference ------------------------');
      //console.log(sinth)
      //console.log(globalConfig.forms.anpl.production.customerData);
      //console.log(globalConfig.forms.bkbe.production.customerData);
      //console.log(globalConfig.forms.bkit.production.customerData);
    })
    //console.log(synthesized[0].forms.anpl.production.customerData)
    console.log(globalConfig.forms.bkit.production.customerData);
    //console.log(JSON.stringify(globalConfig));
  })
  .catch(err => {
    console.log(err);
  });

  
function insert(oldFile, newFile) {
  let result;

  if (typeof(oldFile) === 'undefined') {
    result = newFile;

  } else {
    result = JSON.parse(JSON.stringify(oldFile));

    for (let idx in newFile) {

      if (typeof(result[idx]) === 'object') { 
        result[idx] = insert(result[idx], newFile[idx]);
      }

      if (typeof(result[idx]) === 'undefined' || typeof(result[idx]) !== 'object') {
        result[idx] = newFile[idx];
      }

    }
    
  }
  return result;
}
