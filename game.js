function game() {
  var array =
  [
    'red',
    'orange',
    'green',
    'blue',
    'purple',
  ];
  var current_color = array[randomInteger(0, 4)]
  var score = 0;
  var interval = 5000;

  var buttons_block = document.getElementById('buttons');
  var current_color_el = document.getElementById('current_color');
  var score_block =document.getElementById('score');

  document.getElementsByClassName('button').onclick = press_button;

  score_block.innerText = score;

  current_color_el.innerText = "COLOR";
  // var index = randomInteger(0, 4);
  place_buttons(array);
  runtime();

  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
  }

  function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function place_buttons(colors) {
    buttons_block.innerHTML = "";
    colors.forEach(function(currentValue, index, array){
      var button = document.createElement('button');
      button.id = index;
      button.innerText = currentValue;
      button.addEventListener("click", press_button);
      buttons_block.appendChild(button);
    });
  }

  function press_button() {
    var currentValue = this.innerText;
    if (current_color_el.className == currentValue) {
      score++;
    } else {
      score--;
    }
    score_block.innerText = score;
    runtime();
  }

  function runtime() {


    setInterval(function() {
      current_color_el.className = current_color;

      var colors = shuffle(array);
      place_buttons(colors);
    }, interval);
  }
}
