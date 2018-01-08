'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

// functions index
module.exports = {
  mapDirFiles: mapDirFiles
}

// Map Files in path in a list of Objects.
function mapDirFiles(path) {
  return listPathFiles(path)
    .then(files => {
      return files.map(file => {
        return extractFileContents({ name: file, path: path });
      });
    })
    .catch(err => { return [] });
}


async function listPathFiles(path) {
  return await fs.readdirSync(path);
}

function extractFileContents(file) {
  let splitDot = file.name.split('.');
  let fileInfo = {
    name: file.name,
    path: file.path,
    extension: splitDot[splitDot.length-1],
  }
  fileInfo.content = parseFileContents(`${fileInfo.path}/${fileInfo.name}`, fileInfo.extension);
  return fileInfo;
}

function parseFileContents(path, extension) {
  switch (extension) {
    case 'json': return parseJsonFile(path); break;
    case 'yml': return parseYamlFile(path); break;
    default: return {}; break;
  }
}

function parseJsonFile(path) {
  let parsed;
  try { parsed = JSON.parse(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}

function parseYamlFile(path) {
  let parsed;
  try { parsed = yaml.safeLoad(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}
