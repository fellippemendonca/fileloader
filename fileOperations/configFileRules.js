'use strict';

// Known Sites & Environments
const siteIds = ['anpl', 'bkbe', 'bkit'];
const environments = ['production', 'staging', 'development'];

// Exportable function index
module.exports = {
  formatFiles: formatFiles,
  buildInfo: buildInfo
}

// Apply the file Reading rules on already parsed configuration files;
function formatFiles(files) {
  return files.map(file => {
    extractConfigAndSite(file, siteIds);
    return detectConfig(file);
  });
}

// Use the predefined rules to extract file name configurations;
function extractConfigAndSite(file, siteIds) {
  let splitDot = file.name.split('.');
  let splitDash = splitDot[0].split('_');
  let siteId = splitDash.map(elem => { if (siteIds.indexOf(elem) > -1) { return elem } });

  file.configName = splitDash[0];
  file.siteId = siteId[siteId.length-1] || 'all';
  
  return file;
}

// It will distribute the config between all sites or specific ones depending of fileName or keyword "default" in file contents;
/*
In this specific case the 'default' verification was commented because the file 'forms_customer_bkit.yml' should be specific to
the siteId 'bkit', but it's content contains the 'default' keyword. As the descriptions does not mention a rule for overwritting
in this specific situation, I'll assume that the siteId in file name is more important than the default in file content.
*/
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

// Recursively read all contents of the configuration files and build a new formatted object;
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

// Used to recursively merge an old configuration object with the new values;
function buildInfo(oldInfo, newInfo) {
  let result;

  if (typeof(oldInfo) === 'undefined') {
    result = newInfo;

  } else {
    result = cloneObject(oldInfo);

    for (let idx in newInfo) {

      if (typeof(result[idx]) === 'object') {
        result[idx] = buildInfo(result[idx], newInfo[idx]);
      }

      if (typeof(result[idx]) === 'undefined' || typeof(result[idx]) !== 'object') {
        result[idx] = newInfo[idx];
      }

    }
    
  }
  return result;
}

// Used to clone an existent object to use a new memory reference;
function cloneObject(object) {
  let newObject;
  try { newObject = JSON.parse(JSON.stringify(object)) }
  catch (err) { newObject = undefined }
  return newObject;
}