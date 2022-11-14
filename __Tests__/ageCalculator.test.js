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

  // test #2 Murcury age
  test('should correctly return age in Mercury years', () => {
    expect(calc.calculator('Mercury')).toEqual(116.67);
  });

  // test #3 Venus age
  test(' should correctly return age in Venus years', () => {
    expect(calc.calculator('Venus')).toEqual(48.1);
  })


});