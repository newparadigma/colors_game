function game() {
  // init
  var score = 0;
  var interval = 5000;
  var colors =
  [
    'red',
    'orange',
    'green',
    'blue',
    'purple',
  ];

  var buttons_block = document.getElementById('buttons');
  for (var i = 0; i < 5; i++) {
    var button = document.createElement('button');
    button.id = i;
    button.innerText = colors[i];
    buttons_block.appendChild(button);
  }

  var current_color = 1;
  randomInteger(min, max)
  setInterval(function() {

  }, interval);
}
