
function game() {
  var array =
  [
    'red',
    'orange',
    'green',
    'blue',
    'purple',
  ];

  var current_color;
  var score = 0;
  var interval = 5000;
  var interval_id;

  var buttons_block = document.getElementById('buttons');
  var current_color_el = document.getElementById('current_color');
  var score_block =document.getElementById('score');
  var interval_el =document.getElementById('interval');

  score_block.innerText = score;
  interval_el.innerText = interval;
  change_current_color();
  replace_buttons();
  runtime();

  function runtime() {
    interval_id =
    setInterval(function() {
      change_current_color();
      replace_buttons();
    }, interval);
  }

  function change_current_color() {
    array_length = array.length;
    current_color = array[randomInteger(0, array_length - 1)];
    current_color_el.className = current_color;
  }

  function replace_buttons() {
    //init
    var button_texts = shuffle(array);
    // var button_colors = shuffle(button_texts);

    console.log(button_texts);
    console.log(button_colors);
    //clear area
    buttons_block.innerHTML = "";
    //replace_buttons
    for (var i = 0; i < array.length; i++) {
      var button = document.createElement('button');
      button.id = i;
      button.innerText = button_texts[i];
      button.className = button_texts[randomInteger(0, button_texts.length - 1)];
      button.addEventListener("click", press_button);
      buttons_block.appendChild(button);
    }
  }

  function press_button() {
    if (this.innerText == current_color) {
      score++;
      interval -= 100;

      clearInterval(interval_id);
      score_block.innerText = score;
      interval_el.innerText = interval;

      change_current_color();
      replace_buttons();
      runtime();
    } else {
      buttons_block.innerHTML = "";
      clearInterval(interval_id);
    }
  }

  //---------------------
  function randomInteger(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
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
  //---------------------
}
