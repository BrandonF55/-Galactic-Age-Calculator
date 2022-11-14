export class AgeCalculator {
  constructor(age) {
    this.age = age;
  }


  calculator(planet){
    let mercuryAge;
    let venusAge;
    let marsAge;
    let jupiterAge;

      switch(planet) {
        case "Mercury":
        mercuryAge = parseFloat((this.age/.24).toFixed(2));
        return mercuryAge;
        case "Venus": 
        venusAge = parseFloat((this.age/.62).toFixed(2));
        return venusAge;
        case "Mars":
        marsAge = parseFloat((this.age/1.88).toFixed(2));
        return marsAge;
        case "Jupiter":
        jupiterAge = parseFloat((this.age/11.86).toFixed(2));
        return jupiterAge;
      }

    } 


    
  yearsToLive(planet) {
    let lifeExpectancy = 72.6;
    let mercuryLifeExp;
    let venusLifeExp;
    let marsLifeExp;
    let jupiterLifeExp;

    switch (planet) {
      // case "Mercury":
      //   mercuryLifeExp = parseFloat((lifeExpectancy/.25).toFixed(2));
      //   return mercuryLifeExp;
        case "Venus":
          venusLifeExp = parseFloat((lifeExpectancy/.62).toFixed(2));
          return venusLifeExp;
          case "Mars":
            marsLifeExp = parseFloat((lifeExpectancy/1.88).toFixed(2));
            return marsLifeExp;
    }
  }



// yearsToLive(planet){
//   let planetAge = this.calculator(plant);
//   let planetLifeExpectancy =this.calculatePlantetLifeExpectancy(planet);
//   let yearsToLive = parseFloat((planetLifeExpectancy - planetAge).toFixed(2));
// }



}