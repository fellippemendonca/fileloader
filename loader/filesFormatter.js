'use strict';

// Known Sites & Environments
const siteIds = ['anpl', 'bkbe', 'bkit'];
const environments = ['production', 'staging', 'development'];

// functions index
module.exports = {
  formatFiles: formatFiles,
  buildInfo: buildInfo
}


function formatFiles(files) {
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
      data[file.configName][siteId] = extractContent(file.content);
    });
  
  } else {
    data[file.configName][file.siteId] = extractContent(file.content);
  }

  return data;
}


function extractContent(content) {
  let result = {};

  for (let idx in content) {
    
    if (siteIds.indexOf(idx) > -1 || idx === 'default') {
      result = extractContent(content[idx]);
    
    } else if (environments.indexOf(idx) > -1) {
      result[idx] = extractContent(content[idx]);
    
    } else {
      result = content;
    }
  }

  return result;
};


function buildInfo(oldFile, newFile) {
  let result;

  if (typeof(oldFile) === 'undefined') {
    result = newFile;

  } else {
    result = cloneObject(oldFile);

    for (let idx in newFile) {

      if (typeof(result[idx]) === 'object') {
        result[idx] = buildInfo(result[idx], newFile[idx]);
      }

      if (typeof(result[idx]) === 'undefined' || typeof(result[idx]) !== 'object') {
        result[idx] = newFile[idx];
      }

    }
    
  }
  return result;
}

function cloneObject(object) {
  let newObject;
  try { newObject = JSON.parse(JSON.stringify(object)) }
  catch (err) { newObject = undefined }
  return newObject;
}