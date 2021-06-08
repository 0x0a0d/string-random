# @cylution/string-random

> npm i @cylution/string-random

Or

> yarn add @cylution/string-random

generate random string

## Usage
```js
const stringRandom = require('@cylution/string-random')
console.log(stringRandom.rand(10, stringRandom.lowerCharacters))
// => mhixlmigag
```

## methods

### rand(length = 10, characters = string[]) => string

+ length: return string length
+ characters: random in characters

## exports characters

```js
const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numericCharacters = '0123456789'.split('')
const specialPrintableCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('')
const urlSafeCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters, '-._~'.split(''))
const distinguishableCharacters = 'CDEHKMPRTUWXY012458'.split('')
const asciiPrintableCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters, specialPrintableCharacters)
const alphanumericCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters)
```
