document.getElementById('result').innerHMTL = "Write some text to get started :D";
setInterval(function(){
  document.getElementById('result').innerHMTL = 'This text has a chance of ' + gibberish.detect(document.getElementById('textEntry').value) + '% of being gibberish.';
}, 500);
