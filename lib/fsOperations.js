'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

// function index
module.exports = {
  listFiles: listFiles,
  mapFiles: mapFiles
}

async function listFiles(path) {
  return await fs.readdirSync(path);
}

function mapFiles(path) {
  return listFiles(path)
    .then(files => {
      return files.map(file => {
        return fileTypeDetect({ name: file, path: path });
      });
    })
    .catch(err => { return [] });
}

function fileTypeDetect(file) {
  let splitDot = file.name.split('.');
  let fileInfo = {
    name: file.name,
    path: file.path,
    extension: splitDot[splitDot.length-1],
  }
  fileInfo.content = contentParse(`${fileInfo.path}/${fileInfo.name}`, fileInfo.extension);
  return fileInfo;
}

function contentParse(path, extension) {
    switch (extension) {
      case 'json': return parseJson(path); break;
      case 'yml': return parseYaml(path); break;
      default: return {}; break;
    }
}

function parseYaml(path) {
  let parsed;
  try { parsed = yaml.safeLoad(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}

function parseJson(path) {
  let parsed;
  try { parsed = JSON.parse(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}
