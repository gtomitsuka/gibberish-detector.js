/* Open-source! Made by Gabriel Tomitsuka. Original Version by @ProgramFOX */

//This function divides the string 
function divideByChunks(string){
  var charArray = [];
  
  while(charArray.length < (string.length / 35)){
    charArray.push(string.substring(0, 35));
    string = string.substring(36);
  }
  
  if(charArray.length >= 1 && charArray[charArray.length - 1].length < 10){
    charArray[charArray.length - 2] += charArray[charArray.length - 1];
    charArray.pop();
  }
  return charArray;
};

function getVowelFrequency(string) {
  var vowelFreq = 0;
  var normalFreq = 0;
  for (var i = 0; i < string.length; i++) {
    var character = string.charAt(i);
    if(!character.match(/^[a-zA-Z]+$/))
      continue;
    
    if(character.match(/^(a|e|i|o|u)$/i))
      vowelFreq++;
    else
     normalFreq++;
  }
  
  if(normalFreq !== 0)
    return vowelFreq / normalFreq * 100;
  else
    return 0;
};

function getWordToCharRatio(string){
  var wordArray = string.split(/[\W_]/);
  return wordArray.length / string.length * 100;
}

function getDeviationScore(percentage, lowerBound, upperBound){
  if(percentage < lowerBound)
    return Math.log(lowerBound - percentage, lowerBound) * 100;
  else if(percentage > upperBound)
    return Math.log(percentage - upperBound, 100 - upperBound) * 100;
  else
    return 0;
}

var classificationFunction = function(string){
  if(verifyEmptyness(string))
    return 0;
  
  var array = divideByChunks(string);
}

//Thanks to Jano González from SE for this
function verifyEmptyness(str) {
  return (str.length === 0 || !str.trim());
};
