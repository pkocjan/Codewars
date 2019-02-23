/*
    https://www.codewars.com/kata/54b724efac3d5402db00065e
*/
export function decodeMorse(morseCode: string): string {
    let arrayOfStrings: Array<string> = morseCode.trim().split(' ');
      let word = '';
      for (let i = 0; i < arrayOfStrings.length; i++) {
          if (arrayOfStrings[i] !== '') {
              
              word += MORSE_CODE[arrayOfStrings[i]];
          } else if (arrayOfStrings[i + 1] === ''){
              word += ' ';
              i++;
          }
      }
      return word;
}