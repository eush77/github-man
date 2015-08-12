[![npm](https://nodei.co/npm/github-man.png)](https://npmjs.com/package/github-man)

# github-man

[![Dependency Status][david-badge]][david]

Open README from GitHub repository as a man page.

[david]: https://david-dm.org/eush77/github-man
[david-badge]: https://david-dm.org/eush77/github-man.png

## CLI

### `github-man [--markdown | -m] <user> <repo>`

Opens readme for `<user>/<repo>` as a man page or in `$PAGER` (with `--markdown`).

## API

### `githubMan(user, repo, [opts], cb(err, man))`

Fetches readme for `<user>/<repo>` from GitHub and returns it as a man page.

#### `opts.man`

Type: `Boolean` <br>
Default: `true`

Emit readme in troff.

## Related

- [npm-man] — open any package readme from npm as a man page.

[npm-man]: https://github.com/eush77/npm-man

## Install

```
npm install -g github-man
```

## License

MIT
