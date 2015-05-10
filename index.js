window.onload = function(){
  document.getElementById('_gibberishDetectedResult').innerHTML = "Write some text to get started :D";

  setInterval(function(){
    document.getElementById('_gibberishDetectedResult').innerHTML = 'This text has a chance of ' + gibberish.detect(document.getElementById('textEntry').value) + '% of being gibberish.';
  }, 500);
}
