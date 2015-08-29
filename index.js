'use strict';

var githubReadme = require('github-readme'),
    readmeToManPage = require('readme-to-man-page'),
    ghgot = require('gh-got');


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
    opts.man
      ? manPage(readme, cb)
      : cb(null, readme);
  });

  function manPage (readme, cb) {
    ghgot(['repos', user, repo].join('/'), function (err, info) {
      if (err) return cb(err);

      cb(null, readmeToManPage(readme, {
        name: repo,
        description: info.description,
        date: info.updated_at,
        section: 'github',
        manual: user + '/' + repo + (info.fork ? ' (fork)' : '')
      }));
    });
  }
};
