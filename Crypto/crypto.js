export { modulo, encodeCaesarCypher, decodeCaesarCypher }; 

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