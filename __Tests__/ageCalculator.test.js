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
    expect(calc.calculator('Venus')).toEqual(45.16);
  })

  // test #4 Mars age
  test('this should correctly return age in Mars years', () => {
    expect(calc.calculator('Mars')).toEqual(14.89);
  })

  // test #5 Jupiter age
  test('this should correctly return the age in Mars years', () => {
    expect(calc.calculator('Jupiter')).toEqual(2.36);
  })

// _____________________ 

  // test #6 Murcury years left on the planet.
  // test('should correctly return years to live on Murcury', () => {
  //   expect(calc.yearsToLive("Murcury")).toEqual(302.5);
  // })

  // test #7 Venus years left on the planet.
  test('should correctly return years left to live on Venus', () => {
    expect(calc.yearsToLive("Venus")).toEqual(117.1);
  });

  // test #8 Mars years left on the planet.
  test('should correctly return years left to live on Mars', () => {
    expect(calc.yearsToLive("Mars")).toEqual(38.62);
  });

  // test #9 Jupiter years left on the planet.
  test('should correctly return years left to live on Jupiter', () => {
    expect(calc.yearsToLive("jupiter")).toEqual(6.12);
  });

});