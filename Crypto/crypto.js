export { modulo, encodeCaesarCypher, decodeCaesarCypher, badHash }

/* Utils */
const modulo = (a, b) => {
  return ((a % b) + b) % b
}

/* Symmetric Encryption Key */
const encodeCaesarCypher = (message, Ke) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return [...message]
    .map(char => [...alphabet][(alphabet.indexOf(char) + Ke) % alphabet.length])
    .join('')
}

const decodeCaesarCypher = (message, Ke) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'
  return [...message]
    .map(
      char =>
        [...alphabet][modulo(alphabet.indexOf(char) - Ke, alphabet.length)]
    )
    .join('')
}

/* Bad Hash function */
const badHash = message => {
  return (
    [...message].reduce((acc, char) => {
      return acc + char.charCodeAt(0)
    }, 0) % 256
  ).toString(16)
}
