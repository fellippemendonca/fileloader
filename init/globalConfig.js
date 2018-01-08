'use strict';

const fileOperations = require('../loader/index');


module.exports = globalConfig;

function globalConfig() {
  this.configurations;
};

globalConfig.prototype.set = function (obj) {
  let self = this;
  self.configurations = obj;
}

globalConfig.prototype.get = function () {
  let self = this;
  return self.configurations;
}

globalConfig.prototype.getConfig = function (configName, siteId, environment) {
  let self = this;

  try {
    return self.configurations[configName][siteId][environment];
  } catch(err) {
    return err.message;
  }
}

globalConfig.prototype.load = function (path) {
  let self = this;

  return fileOperations.mapDirFiles(path)
    .then(files => {
      let formattedFiles = fileOperations.formatFiles(files)

      formattedFiles.map(file => {
        self.configurations = fileOperations.buildInfo(self.configurations, file);
      })

    })
    .catch(err => {
      console.log(err);
    })
    .then(() => {
      return self.get();
    });
}
