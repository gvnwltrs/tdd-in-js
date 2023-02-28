import {it, expect} from 'vitest';

import { validateStringNotEmpty, validateNumber} from './validation';

it('should take a string type', () => {
  const input = 'string';

  const result = validateStringNotEmpty(input); 

  expect(result).toBeTypeOf('string');
}); 

it('should throw error for empty string', () => {
  const input = '';

  const result = () => {
    validateStringNotEmpty(input); 
  };

  expect(result).toThrowError(); 
});

it('should take a number type', () => {
  const input = 1; 

  const result = validateNumber(input);

  expect(result).toBeTypeOf('number');
}); 

it('should throw error for NaN', () => {
  const input = 'NaN';

  const result = () => {
    validateNumber(input);
};

  expect(result).toThrowError();
});

