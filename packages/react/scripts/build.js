'use strict';

const { execSync } = require('child_process');
const { inInstall } = require('in-publish');
const path = require('path');
const fs = require('fs');
const mapValues = require('lodash/mapValues');

if (inInstall()) {
  process.exit(0);
}

const tscPath = path.resolve(__dirname, '../node_modules/.bin/tsc').replace(/ /g, '\\ ');

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: 'inherit',
    env: Object.assign({}, process.env, extraEnv),
  });

// const ignoreGlobs = ['**/__tests__/*', '**/*-test.js', '**/*-story.js'].join(',');

try {
  exec(`${tscPath} src -d es"`, {
    BABEL_ENV: 'es',
  });
  exec(`${tscPath} src -d lib"`, {
    BABEL_ENV: 'cjs',
  });
} catch (error) {
  console.error('One of the commands failed:', error.stack); // eslint-disable-line no-console
  process.exit(1);
}
