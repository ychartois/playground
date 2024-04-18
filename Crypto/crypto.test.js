import { modulo, encodeCaesarCypher, decodeCaesarCypher } from './crypto.js'; 

describe('modulo', () => {
  test('should handle positive values', () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test('should handle negative dividend', () => {
    expect(modulo(-1, 3)).toBe(2);
  });

  test('should handle zero correctly', () => {
    expect(modulo(0, 5)).toBe(0);
  });

  test('should return 0 when mod is 1', () => {
    expect(modulo(5, 1)).toBe(0);
  });

  test('should return NaN for zero divisor', () => {
    expect(modulo(5, 0)).toBeNaN();
  });
});

describe('encodeCaesarCypher', () => {
  test('encodes lowercase letters', () => {
    expect(encodeCaesarCypher("attackatdawn", 5)).toEqual("fyyfhpfyifbs"); 
  });

  test('returns empty string for empty input', () => {
    expect(encodeCaesarCypher("", 5)).toBe("");
  });

  test('handles wrapping from z to a', () => {
    expect(encodeCaesarCypher("xyz", 3)).toEqual("abc");
  });
});

describe('decodeCaesarCypher', () => {
  test('decodes lowercase letters', () => {
    expect(decodeCaesarCypher("fyyfhpfyifbs", 5)).toBe("attackatdawn");
  });
  
  test('returns empty string for empty input', () => {
    expect(decodeCaesarCypher("", 5)).toBe("");
  });

  test('handles wrapping from a to z', () => {
    expect(decodeCaesarCypher("abc", 3)).toEqual("xyz");
  });
});
//