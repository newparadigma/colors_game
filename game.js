function game() {
  // init
  var score = 0;
  var interval = 5000;
  var array =
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
    var colors = array_randomize();
    colors.forEach();
  }, interval);

  function array_randomize() {
    var new_array = [];
    var array_count = array.length;
    while (array.length !== 0) {
      var index = randomInteger(0, array.length);
      new_array.push(array[index]);
      array.splice(index, 1);
    }

    return new_array;
  }
}
