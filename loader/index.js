'use strict';

const filesRetriever = require('./filesRetriever');
const filesFormatter = require('./filesFormatter');

module.exports = {
  mapDirFiles: filesRetriever.mapDirFiles,
  formatFiles: filesFormatter.formatFiles,
  buildInfo: filesFormatter.buildInfo
}