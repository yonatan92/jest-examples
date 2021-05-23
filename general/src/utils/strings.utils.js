import { MORSE_CODES } from "./morse.codes";

export const sayHelloTo = (person) => {
    return `Hi, ${person}!`;
}

export const decodeMorse = (morseCode)=> {
    let output = "";
    const words = morseCode.split("   ");
    for (const word of words) {
        const chars = word.split(" ");
        for (const char of chars) {
            output += MORSE_CODES[char];
        }
        output += " ";
    }
    return output.trim();
}
