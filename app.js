let seconds = 00; 
let tens = 00; 
let minutes = 00
let appendTens = document.getElementById("tens")
let appendSeconds = document.getElementById("seconds")
let appendMinutes = document.getElementById("minutes")
let buttonStart = document.getElementById('button-start');
let buttonStop = document.getElementById('button-stop');
let buttonReset = document.getElementById('button-reset');
let Interval ;

buttonStart.onclick = function() {
    
    clearInterval(Interval);
    Interval = setInterval(startTimer, 10);
  }
  
    buttonStop.onclick = function() {
    clearInterval(Interval);
  }
  

  buttonReset.onclick = function() {
    clearInterval(Interval);
    tens = "00";
  	seconds = "00";
    minutes = "00"
    appendTens.innerText = tens;
  	appendSeconds.innerText = seconds;
    appendMinutes.innerText = minutes;
  }
  
  function startTimer () {
    tens++; 
       
    if(tens <= 9){
      appendTens.innerText = "0" + tens;
    }
    
    if (tens > 9){
      appendTens.innerText = tens;
      
    } 
    
    if (tens > 99) {
      console.log("seconds");
      seconds++;
      appendSeconds.innerText = "0" + seconds;
      tens = 0;
      appendTens.innerText = "0" + 0;
    }
    
    if (seconds > 9){
      appendSeconds.innerText = seconds;
    }

    if (seconds > 59) {
      minutes++;
      appendMinutes.innerText = "0" + minutes;
      seconds = 0;
      appendSeconds.innerText = "00";
      console.log(appendSeconds);
    }

    // if (minutes = seconds >= 59) {
    //   appendMinutes.innerText = minutes
    //   minutes = 0;
    // }

    // if (seconds > 59) {
    //   console.log("minutes");
    //   // seconds = 0
    //   minutes++;
    //   appendMinutes.innerText = `${minutes} ${seconds} ${tens} + 0`
    //   appendMinutes.innerText = "1" + 0;
    // } 
}
  