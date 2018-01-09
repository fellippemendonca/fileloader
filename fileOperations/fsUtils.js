'use strict';

const fs = require('fs');
const yaml = require('js-yaml');

// Exportable function index;
module.exports = {
  mapFiles: mapFiles
};

// Map Files in path in a list of Objects;
function mapFiles(path) {
  return listPathFiles(path)
    .then(files => {
      return files.map(file => {
        return extractFileContents({ name: file, path: path });
      });
    })
    .catch(err => { return [] });
}


// HELPERS
// Return an array of file names inside de directory path;
async function listPathFiles(path) {
  return await fs.readdirSync(path);
}

// Return an object with all attributes of the file with the content already parsed;
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

// Return a parsed file content using the extension input to determine what the correct parser;
function parseFileContents(path, extension) {
  switch (extension) {
    case 'yml': return parseYamlFile(path); break;
    case 'json': return parseJsonFile(path); break;
    default: return { error: `file extension: "${extension}" is not compatible.`}; break;
  }
}

// Try to parse a .json file;
function parseJsonFile(path) {
  let parsed;
  try { parsed = JSON.parse(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}

// Try to parse a .yml file
function parseYamlFile(path) {
  let parsed;
  try { parsed = yaml.safeLoad(fs.readFileSync(path, 'utf8')) }
  catch (err) { parsed = { error: err.message } };
  return parsed;
}
