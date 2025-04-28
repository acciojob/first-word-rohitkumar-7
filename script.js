function firstWord(s) {
  // your code here
if (!s) return "";
  
  let str = s.trim();
  let result = "";
  
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== " ") {
      result += str[i]; 
    } else {
      break;
    }
  }
  
  return result;
}

// Do not change the code below

const s = prompt("Enter String:");

alert(firstWord(s));
