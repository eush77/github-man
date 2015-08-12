'use strict';

var readmeToManPage = require('readme-to-man-page'),
    githubGet = require('github-get');


module.exports = function (user, repo, opts, cb) {
  if (typeof opts == 'function') {
    cb = opts;
    opts = {};
  }

  if (opts.man == null) {
    opts.man = true;
  }

  githubGet(user, repo, 'README.md', function (err, _, readme) {
    if (err) return cb(err);
    cb(null, opts.man ? manPage(readme) : readme);
  });

  function manPage (readme) {
    return readmeToManPage(readme, {
      name: repo,
      section: 'github'
    });
  }
};
