'use strict';

var githubReadme = require('github-readme'),
    readmeToManPage = require('readme-to-man-page');


module.exports = function (user, repo, opts, cb) {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  if (opts.man == null) {
    opts.man = true;
  }

  githubReadme(user, repo, function (err, readme) {
    if (err) return cb(err);
    cb(null, opts.man ? manPage(readme) : readme);
  });

  function manPage (readme) {
    return readmeToManPage(readme, {
      name: repo,
      section: 'github',
      manual: user + '/' + repo
    });
  }
};
