/* Utils */
const modulo =  (a, b) => {return ((a % b) + b) % b};

/* Symmetric Encryption Key */
const encodeCaesarCypher = (message, Ke) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'; 
    return [...message].map( char => [...alphabet][(alphabet.indexOf(char) + Ke) % alphabet.length] ).join('')
}

const decodeCaesarCypher = (message, Ke) => {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz';
    return [...message].map(char => [...alphabet][modulo(alphabet.indexOf(char) - Ke, alphabet.length)]).join('');
}

const Ke = 5;
const message = "attackatdown";
const alphabet = 'abcdefghijklmnopqrstuvwxyz';

const encoded = encodeCaesarCypher(message, Ke); 
console.log(encoded);

const decoded = decodeCaesarCypher(encoded, Ke);
console.log(decoded);