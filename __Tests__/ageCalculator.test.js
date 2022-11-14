import { AgeCalculator } from "../src/js/ageCalculator.js";

describe('AgeCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new AgeCalculator(28);
  });
  
  // Test #1
  test('should correctly return a new calc object with the age property', () => {
    expect(calc.age).toEqual(28);
  });



});