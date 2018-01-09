'use strict';

const path = './configFiles';
const fileOperations = require('../fileOperations/index');


module.exports = getConfig;

function getConfig(configName, siteId, environment) {
  let configurations;

  return fileOperations.mapFiles(path)
    .then(files => {
      let formattedFiles = fileOperations.formatFiles(files)

      formattedFiles.map(file => {
        configurations = fileOperations.buildInfo(configurations, file);
      })
      
      return configurations[configName][siteId][environment];
    })
    .catch(err => { throw err });
}
