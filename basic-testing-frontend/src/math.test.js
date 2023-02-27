import { it,expect } from 'vitest'; 

import { add } from './math';

it('should summarize all number values in an array', () => {
  // arrange  
  const numbers = [1,2,3];

  // act 
  const result = add(numbers); 

  // assert 
  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => prevValue + currentValue, 0 
  );
  expect(result).toBe(expectedResult); 
});

it('should yield NaN if a least one invalid number is provided', () => {
  // arrange  
  const inputs = ['hi',1,2,3];

  // act 
  const result = add(inputs); 

  // assert 
  expect(result).toBeNaN(); 
});

it('should yield a correct sum if an array of string values is provided', () => {
  const numbers = ['1','2'];

  const result = add(numbers); 

  const expectedResult = numbers.reduce(
    (prevValue, currentValue) => +prevValue + +currentValue, 0 
  );
  expect(result).toBe(expectedResult);

}); 

it('should yield 0 if an empty array is provided', () => {

  const numbers = []; 

  const result = add(numbers); 

  expect(result).toBe(0); 
}); 

it('should throw an error if no value is passed into the function', () => {
  const resultFn = () => {
    add(); 
  };

  expect(resultFn).toThrow(); 
}); 

it('should throw an error if provided with multiple arguments instead of an array', () => {
  const num1 = 1; 
  const num2 = 2; 

  const resultfn = () => {
    add(num1, num2);
  };

  expect(resultfn).toThrow(/is not iterable/);

});
