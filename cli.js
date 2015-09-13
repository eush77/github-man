#!/usr/bin/env node
'use strict';

var githubMan = require('./');

var help = require('help-version')(usage()).help,
    manPager = require('man-pager');


function usage() {
  return [
    'Usage:  github-man <user> <repo>',
    '',
    'Open README from GitHub repository as a man page.'
  ].join('\n');
}


(function (argv) {
  if (argv.length != 2) {
    return help(argv.length);
  }

  githubMan(argv[0], argv[1], function (err, man) {
    if (err) return console.error(err.toString());
    manPager().end(man);
  });
}(process.argv.slice(2)));
