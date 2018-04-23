# guitarics-chordify

![npm](https://img.shields.io/npm/v/guitarics-chordify.svg) ![license](https://img.shields.io/npm/l/guitarics-chordify.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/guitarics-chordify.svg)



![nodei.co](https://nodei.co/npm/guitarics-chordify.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/guitarics-chordify.svg)
![stars](https://img.shields.io/github/stars/wspecs/guitarics-chordify.svg)
![forks](https://img.shields.io/github/forks/wspecs/guitarics-chordify.svg)

![forks](https://img.shields.io/github/forks/wspecs/guitarics-chordify.svg)

![](https://david-dm.org/wspecs/guitarics-chordify/status.svg)
![](https://david-dm.org/wspecs/guitarics-chordify/dev-status.svg)

## Features

- Create and transpose music chords.

## Usage

```js
const chordify = require('guitarics-chordify');

const chord = new chordify.Chord('Bsus4');
console.log(chord); // Chord { note: 'B', key: 'B', variation: 'sus4', isSharpKey: true }

chord.flatten();
console.log(chord); // Chord { note: 'Bb', key: 'Bb', variation: 'sus4', isSharpKey: false }

chord.sharpen(); // Return back to original chord Bsus4

chord.sharpen();
chord.getChord(); // Csus4
```

### Add chord with key

```js
const chordify = require('guitarics-chordify');

// A Bsus4 chord for a song in the key of E
const chord = new chordify.Chord('Bsus4', 'E');

// Chord { note: 'B', key: 'E', variation: 'sus4', isSharpKey: true }
```

## Install

`npm install --save guitarics-chordify`


## Scripts

 - **npm run build** : `tsc`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

Package | Version | Dev
--- |:---:|:---:
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔
[ts-node](https://www.npmjs.com/package/ts-node) | ^6.0.0 | ✔


## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> https://twitter.com/wendlysaintil

## License

 - **MIT** : http://opensource.org/licenses/MIT