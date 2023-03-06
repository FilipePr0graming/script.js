function countDown() {
  var now = new Date().getTime();
  var countDate = new Date("March 31, 2023 23:59:59").getTime();
  var distance = countDate - now;
  
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
  document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
  
  if (distance < 0) {
    clearInterval(countDownInterval);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}

var countDownInterval = setInterval(countDown, 1000);
