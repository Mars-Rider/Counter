var num = 0;
var lastNum = 0;
var ones = Math.floor(num % 10),
  tens = Math.floor((num / 10) % 10),
  hundreds = Math.floor((num / 100) % 10),
  thousands = Math.floor((num % 10000) / 1000);

var mob = document.getElementById("mobile");
var onesE = document.getElementById("ones");
var lastones = document.getElementById("lastones");
var tensE = document.getElementById("tens");

var lastClick = Date.now();

var dble = false;

document.onclick = function () {
  const now = Date.now();
  if (now - lastClick >= 500) {
    lastClick = Date.now();
    
    moveDown();
    // wait();
    // setTimeout(function () {
    //   //wait
    // }, 200);
  }
};

function count() {
  num++;
  (ones = Math.floor(num % 10)),
    (tens = Math.floor((num / 10) % 10)),
    (hundreds = Math.floor((num / 100) % 10)),
    (thousands = Math.floor((num % 10000) / 1000));

  onesE.innerHTML = ones;
  tensE.innerHTML = tens;

  document.title = "Counter - " + num + "";
}

function moveDown() {
  if (onesE.innerHTML == 9) {
    tensE.classList.add("down");
  }

  onesE.classList.add("down");
  count();

  // onesE.classList.add("down");
  // onesE.classList.remove("down");

  setTimeout(function () {
    if (onesE.innerHTML == 0) {
      lasttens.classList.add("up");
    }
    lastones.classList.add("up");

    if (onesE.innerHTML == 0) {
      tensE.classList.remove("down");
    }
    onesE.classList.remove("down");

    setTimeout(function () {
      if (onesE.innerHTML == 0) {
        lasttens.innerHTML = tensE.innerHTML;
        lasttens.classList.remove("up");
      }
      lastones.innerHTML = onesE.innerHTML;
      lastones.classList.remove("up");
    }, 500);
  }, 0);

  // lastones.classList.remove("up");
}
