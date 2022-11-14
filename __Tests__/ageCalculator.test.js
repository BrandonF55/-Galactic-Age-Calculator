import { TestScheduler } from "jest";
import { AgeCalculator } from "../src/js/ageCalculator.js";

describe('AgeCalculator', () => {
  let calc;
  beforeEach(() => {
    calc = new AgeCalculator(28);
  });

  // test #1
  Test('shoudl correctly return a new object with the age property', () => {
    expect(calc.age).toEqual(28);
  });
  
})