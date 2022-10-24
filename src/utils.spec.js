import { add, isEven, substract, multiply } from './utils';

describe('Utils', () => {
  describe('add', () => {
    it('adds two numbers together', () => {
      const result = add(1, 2);
      expect(result).toBe(3);
    });
  });

  describe('isEven', () => {
    it('should return true if the provided number is even', () => {
      const result = isEven(2);
      expect(result).toBe(true);
    });
    it('should return false if the provided number is odd', () => {
      const result = isEven(1);
      expect(result).toBe(false);
    });
    it('should not work with data types that are not numbers', () => {
      const result = isEven('one');
      expect(result).toBe('only numbers are accepted');
    });
  });

  describe('Substract', () => {
    it('should subtract two numbers', () => {
      const result = substract(4, 2);
      expect(result).toBe(2);
    });
  });

  describe('Multiply', () => {
    it('should multiply two numbers together', () => {
      const result = multiply(4, 2);
      expect(result).toBe(8);
    });
  });
});
