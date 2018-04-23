# guitarics-chordify

![npm](https://img.shields.io/npm/v/guitarics-chordify.svg) ![license](https://img.shields.io/npm/l/guitarics-chordify.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/guitarics-chordify.svg)  ![Circle CI build status](https://circleci.com/gh/wspecs/guitarics-chordify.svg?style=svg)



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

## Install

`npm install --save guitarics-chordify`


## Scripts

 - **npm run test** : `echo "Error: no test specified"`

## Dependencies

Package | Version | Dev
--- |:---:|:---:



## Contributing

Contributions welcome; Please submit all pull requests against the master branch. If your pull request contains JavaScript patches or features, you should include relevant unit tests. Please check the [Contributing Guidelines](contributng.md) for more details. Thanks!

## Author

Wendly Saintil <wendlysaintil@gmail.com> http://github.com/wspecs

## License

 - **MIT** : http://opensource.org/licenses/MIT