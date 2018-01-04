'use strict';

const siteIds = ['anpl', 'bkbe', 'bkit'];
const environments = ['production', 'staging', 'development'];

// function index
module.exports = {
  synthesize: synthesize
}

function synthesize(files) {
  return files.map(file => {
    extractConfigAndSite(file, siteIds);
    return detectConfig(file);
  });
}

function extractConfigAndSite(file, siteIds) {
  let splitDot = file.name.split('.');
  let splitDash = splitDot[0].split('_');
  let siteId = splitDash.map(elem => { if (siteIds.indexOf(elem) > -1) { return elem } });

  file.configName = splitDash[0];
  file.siteId = siteId[siteId.length-1] || 'all';
  
  return file;
}


function detectConfig(file) {
  let data = {};
  data[file.configName] = {};

  if (file.siteId === 'all' /*|| file.content['default']*/) {
    siteIds.map(siteId => {
      data[file.configName][siteId] = readContent(file.content);
    });
  
  } else {
    data[file.configName][file.siteId] = readContent(file.content);
  }

  return data;

}


function readContent(content) {
  let result = {};

  for (let idx in content) {
    if (siteIds.indexOf(idx) > -1 || idx === 'default') {
      result = readContent(content[idx]);
    } else if (environments.indexOf(idx) > -1) {
      result[idx] = readContent(content[idx]);
    } else {
      result = content;
    }
  }
  return result;
};