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

// Reversed strings
// https://www.codewars.com/kata/5168bb5dfe9a00b126000018

function solution(str){
    return str.split('').reverse().join('');  
}

// Even or Odd
// https://www.codewars.com/kata/53da3dbb4a5168369a0000fe

function even_or_odd(number) {
    if (number%2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

// Vowel Count
// https://www.codewars.com/kata/54ff3102c1bad923760001f3/train/javascript

// approach 1
function getCount(str) {
    return str.split('').filter(c => "aeiouAEIOU".includes(c)).length;
   }

// approach 2
function getCount(str) {
    let vowelsCount = 0;
    const arr1 = str.split("");
    for(let i = 0; i<arr1.length; i++ ){
      switch(arr1[i]){
          case "a":
          vowelsCount++;
          break;
          case "e":
          vowelsCount++;
          break;
          case "i":
          vowelsCount++;
          break;
          case "o":
          vowelsCount++;
          break;
          case "u":
          vowelsCount++;
      }
    }
    
    return vowelsCount;
  }

// jenny's secret message
// https://www.codewars.com/kata/55225023e1be1ec8bc000390/train/javascript

// approach 1
function greet(name){
    return "Hello, " + (name == "Johnny" ? "my love" : name) + "!";
}

// approach 2
function greet(name){  
    if(name === "Johnny")
      return "Hello, my love!";
    return "Hello, " + name + "!";
}

// Is n divisible by x and y
// https://www.codewars.com/kata/5545f109004975ea66000086/train/javascript

// approach 1
function isDivisible(n, x, y) {
    const res1 = n/x;
    const res2 = n/y;
    if((res1 % 1 === 0) && (res2 % 1 === 0)){
      return true;
    } else{
      return false;
    }
}

// approach 2
function isDivisible(n, x, y) {
    return (n % x === 0 && n % y === 0) ? true : false;
}