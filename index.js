const lowerCharacters = 'abcdefghijklmnopqrstuvwxyz'.split('')
const upperCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
const numericCharacters = '0123456789'.split('')
const specialPrintableCharacters = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('')
const urlSafeCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters, '-._~'.split(''))
const distinguishableCharacters = 'CDEHKMPRTUWXY012458'.split('')
const asciiPrintableCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters, specialPrintableCharacters)
const alphanumericCharacters = [].concat(lowerCharacters, upperCharacters, numericCharacters)

const randomNumber = (max, min = 0) => Math.floor(Math.random() * (max - min + 1) + min)

/**
 * return random string
 * @param {number} [length=10]
 * @param {string[]} characters
 * @returns {string}
 */
const rand = (length = 10, characters = alphanumericCharacters) => {
  return [...Array(length)].reduce((s) => s + characters[randomNumber(characters.length - 1)], '')
}

module.exports = {
  rand,
  lowerCharacters,
  upperCharacters,
  numericCharacters,
  specialPrintableCharacters,
  urlSafeCharacters,
  distinguishableCharacters,
  asciiPrintableCharacters,
  alphanumericCharacters,
}
