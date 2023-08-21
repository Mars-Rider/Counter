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

// window.mobileCheck = function() { let check = false; (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera); if(check == true){ mob.innerHTML = "Reload to reset"; } return check; };

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
  } else {
    dble = true;
    //
    // lastClick = Date.now();
  }
};

function wait() {
  const last = lastClick;
  var now = Date.now();
  lastClick = now;
  while (now - last <= 500) {
    lastClick = now;
    if (dble == true) {
      console.log("dble");
      if (num > 0) {
        moveUp();
      }
      break;
    }

    now = Date.now();
  }
  if (dble == false) {
    console.log(dble);
    moveDown();
  }
  dble = false;
}
// document.ondblclick = function () {
//   const now = Date.now();
//   if (now - lastClick >= 500) {
//     moveUp();
//     lastClick = Date.now();
//   }
// };

function count() {
  num++;
  (ones = Math.floor(num % 10)),
    (tens = Math.floor((num / 10) % 10)),
    (hundreds = Math.floor((num / 100) % 10)),
    (thousands = Math.floor((num % 10000) / 1000));

  onesE.innerHTML = ones;
  tensE.innerHTML = tens;
}

function moveUp() {
  onesE.classList.add("opdown");
  countDown();

  // onesE.classList.add("down");
  // onesE.classList.remove("down");

  setTimeout(function () {
    lastones.classList.add("opup");

    onesE.classList.remove("opdown");

    setTimeout(function () {
      lastones.innerHTML = onesE.innerHTML;
      lastones.classList.remove("opup");
    }, 500);
  }, 0);
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

function countDown() {
  num--;
  (ones = Math.floor(num % 10)),
    (tens = Math.floor((num / 10) % 10)),
    (hundreds = Math.floor((num / 100) % 10)),
    (thousands = Math.floor((num % 10000) / 1000));

  onesE.innerHTML = ones;
  tensE.innerHTML = tens;
}

// var lastheld = Date.now();

// var up = true;

// document.onmousedown = function(){
//   up = false;
//   lastheld = Date.now();
//   while (up == false) {
//     console.log("reset");
//     if(Date.now() - lastheld >= 1000){
//       console.log("reset");
//     }
//   }
// }

// document.onmouseup = function () {
//   up = true;
// };

var insts = document.getElementsByClassName("inst");

var instNum = 1;

setInterval(function () {
  instNum++;

  if (instNum == 1) {
    insts[0].classList.add("curr");
    insts[2].classList.remove("curr");
  } else if (instNum == 2) {
    insts[1].classList.add("curr");
    insts[0].classList.remove("curr");
  } else if (instNum == 3) {
    insts[2].classList.add("curr");
    insts[1].classList.remove("curr");
    instNum = 0;
  }
}, 5000);
