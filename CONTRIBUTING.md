# Contributing

You want to contribute to LiSc? Awesome! Any form of help is greatly appreciated
(contributions/pull requests, suggestions, tips, bug reports,...).

Join the [Litags Discord](https://discord.gg/4d7QWUK) to get in touch (LiTags is a browser extension for lichess.org I implemented).

## I want to report a bug or a problem about LiSc

[__Make an issue__](https://github.com/mpunkenhofer/lisc/issues/new). Make sure you list the steps to reproduce the
problem and it is not a trivial problem or demands unrealistic dev time to fix. Issues reports of very minimal effort
may be closed.

## I want to suggest a feature for LiSc

Issue tickets on features that lack potential or effectiveness are not useful and may be closed. Before creating a
ticket, please first try to discuss it on the [Litags Discord](https://discord.gg/4d7QWUK) in appropriate channels to
gauge feedback. When ready: [make an issue ticket](https://github.com/mpunkenhofer/lisc/issues/new).

## Building

### First time installation

1. Install [git](https://git-scm.com/).
2. Install [node.js](https://nodejs.org)
3. Install [npm](https://www.npmjs.com/get-npm)
4. [Clone](https://help.github.com/articles/cloning-a-repository/) this repository
5. Run `npm install` in that folder.

### Build commands

**`npm run start`** will start a dev server at `localhost:9000` which will hot reload any changes to the source you make in the meantime.

**`npm run build`** will clean `build/`, then build LiSc (prod mode). Be wary of the `publicPath: '/lisc/'` in `webpack.production.js` and adapt accordingly for your needs.

### Deploy to github pages

**`npm run deploy`** will build LiSc in production mode and push to the `gh-pages` branch of the repo.

### Lint commands

**`npm run lint`** will verify the code style (and point out any errors) of all `.ts .js` and files in `src/`
using  [ESLint](http://eslint.org/) with typescript support by [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint).
  