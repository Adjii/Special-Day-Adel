var countDownDate = new Date("Jul 22, 2023 00:00:00").getTime();

// countdown
// Run myfunc every second
var myfunc = setInterval(function() {

  var now = new Date().getTime();
  var timeleft = countDownDate - now;
      
  // Calculating the days, hours, minutes and seconds left
  var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    "<div class=\"days\"> \
  <div class=\"numbers\">" + days + "</div>Hari</div> \
<div class=\"hours\"> \
  <div class=\"numbers\">" + hours + "</div>jam</div> \
<div class=\"minutes\"> \
  <div class=\"numbers\">" + minutes + "</div>menit</div> \
<div class=\"seconds\"> \
  <div class=\"numbers\">" + seconds + "</div>detik</div> \
</div>";

if (timeleft < 0) location.replace("/home.html")
}, 1000);
