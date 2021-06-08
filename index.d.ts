declare const StringRandom: {
  /**
   * generate random string
   */
  rand: (length?: number, characters?: string[]) => string;
  lowerCharacters: string[];
  upperCharacters: string[];
  numericCharacters: string[];
  specialPrintableCharacters: string[];
  urlSafeCharacters: string[];
  distinguishableCharacters: string[];
  asciiPrintableCharacters: string[];
  alphanumericCharacters: string[];
};
export default StringRandom;
