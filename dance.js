var c = document.getElementById("c");
var ctx = c.getContext("2d");
var state = 1;
var increase = true;
var ivf; // Interval function
var isDancing = false;

function placeCat() {
  var img = document.getElementById("c" + state);
  ctx.drawImage(img, 0, 0)
}

function dance(bpm) {
  isDancing = true;
  var ms = (60000/bpm)/2;
  ivf = setInterval(function() {
    switch(state) {
      case 0:
        increase = true;
        state = 1;
        break
      case 1:
        if (increase) {
          state = 2;
        } else {
          state = 0;
        }
        break
      case 2:
        increase = false;
        state = 1
    }
    placeCat()
  }, ms)
}

function stopDance() {
  clearInterval(ivf);
  state = 1;
  increase = true;
  placeCat()
  isDancing = false;
}

function toggleDance() {
  var b = document.getElementById("toggleDance");
  var bval = document.getElementById("bpm").value;
  if (isDancing) {
    stopDance();
    b.innerText = "Start"
  } else {
    b.innerText = "Stop"
    dance(bval)
  }
}

placeCat()
