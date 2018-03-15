var array = [
  'red',
  'orange',
  'green',
  'blue'
];
var current_color;
var score;

var model = {
  changeCurrentColor : function(a) {
    current_color = document.app.randomInteger(0, array.length - 1)
  },

  shuffleArray : function() {
    var a = array;
    return document.app.shuffle(a);
  }
}

var view = {
  startBlock : function(value) {
    el = document.getElementById('start');
    el.innerText = value;
  },

  scoreBlock : function(value) {
    el = document.getElementById('score');
    el.innerText = "SCORE : " + value;
  },

  currentColorBlock : function() {
    el = document.getElementById("menu");
    el.className = current_color;
  },

  colorsBlock : function() {
    var a = document.model.shuffleArray();
    var foo = document.model.shuffleArray();

    var el = document.getElementById("colors");
    el.innerHTML = "";
    for (var i = 0; i < a.length; i++) {
      var button = document.createElement('button');
      button.id = i;
      button.innerText = a[i];
      button.className = "col-md-3 " + foo[i];
      button.addEventListener("click", controller.selectColor(a[i]));
      el.appendChild(button);
    }
  }
}

var controller = {
  startStop : function() {
    var el = document.getElementById("start");

    console.log(el)
    if (el.innerText == "START") {
      //START GAME
      view.startBlock("STOP");
      view.scoreBlock(0);
    } else if (el.innerText == "STOP") {
      //STOP GAME
      view.startBlock("START");
    }

    view.startStop();
  },

  selectColor : function(selectedColor) {
    if (current_color == selectedColor) {
      //WIN
      score++;
    } else {
      //FAIL
      this.stopGame();
    }
  },

  stopGame : function() {
    document.view.startStop("START")
    document.view.scoreBlock(score);
  }
}

var app = {
  init : function() {
    this.event();
  },

  event : function() {
    var el = document.getElementById("start");
    console.log(el);
    el.onclick = controller.startStop();
  },

  randomInteger : function(min, max) {
    var rand = min - 0.5 + Math.random() * (max - min + 1);
    rand = Math.round(rand);
    return rand;
  },

  shuffle : function(a) {
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }
};

// app.init();

var interval_id;








function game() {
  if (interval_id) {
    clearInterval(interval_id);
  }

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

  var buttons_block = document.getElementById('buttons');
  var current_color_el = document.getElementById('current_color');
  var score_block = document.getElementById('score');
  var interval_el = document.getElementById('interval');

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
