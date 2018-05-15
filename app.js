function clock() {
  let fullDate = new Date();
  let hours = fullDate.getHours();
  let minutes = fullDate.getMinutes();
  let seconds = fullDate.getSeconds();

  if (hours > 12) {
        hours -= 12;
        hours = "0" + hours;
  } else if (hours === 0) {
        hours = 12;
  }
  
  if (minutes<10){
    minutes = "0" + minutes;
  }

  if (seconds<10){
    seconds = "0" + seconds;
  }


  document.getElementById('hour').innerHTML = hours + " : ";
  document.getElementById('minute').innerHTML = minutes + " : ";
  document.getElementById('second').innerHTML = seconds;
}

setInterval(clock, 100);
