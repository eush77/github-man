'use strict';

var githubReadme = require('github-readme'),
    readmeToManPage = require('readme-to-man-page'),
    got = require('got');


module.exports = function (user, repo, cb) {
  githubReadme(user, repo, function (err, readme) {
    if (err) return cb(err);
    manPage(readme, cb);
  });

  function manPage (readme, cb) {
    got(['https://api.github.com/repos', user, repo].join('/'), {
      json: true,
      headers: {
        accept: 'application/vnd.github.v3+json'
      }
    }, function (err, info) {
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
