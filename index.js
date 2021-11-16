//  Tip:
//  Comment out the code which you do not wish to execute altogether

// Multiply
// https://www.codewars.com/kata/50654ddff44f800200000004/train/javascript

multiply = (a, b) => a * b;

// Get planet name by id
// https://www.codewars.com/kata/515e188a311df01cba000003

function getPlanetName(id){  
    switch(id){
      case 1:
        return "Mercury";
      case 2:
        return "Venus";
      case 3:
        return "Earth";
      case 4:
        return "Mars";
      case 5:
        return "Jupiter";
      case 6:
        return "Saturn";
      case 7:
        return "Uranus";
      case 8:
        return "Neptune";
      default:
        return "invalid planet id in function getPlanetName()";
    }
}

