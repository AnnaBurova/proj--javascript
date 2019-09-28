document.getElementById('guess').onclick = function () {

  if (document.getElementById('myNumber').value > 5 || document.getElementById('myNumber').value < 0) {

    alert('You can have maximal 5 fingers!');

    return;
  }

  var gotit = false;
  var guesses = 1;
  var x;

  while (gotit == false) {

    x = Math.random();

    x = 6 * x;

    x = Math.floor(x);

    if (document.getElementById('myNumber').value == x) {

      gotit = true;

    } else {

      guesses++;

    }

  }

  alert('Got it! It was a ' + x + '. It only took me ' + guesses + ' guesses!');

}
