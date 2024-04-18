/* Utils */
var modulo =  (a, b) => {return ((a % b) + b) % b};
console.log( modulo(-2,26) )

/* Symmetric Encryption Key */
const Ke = 5;
const message = "attackatdown";
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encoded = [...message].map( char => [...alphabet][(alphabet.indexOf(char) + Ke) % 26] ).join(''); 
console.log(encoded);

const decoded = [...encoded].map(char => [...alphabet][modulo(alphabet.indexOf(char) - Ke, 26)]).join('');
console.log(decoded);