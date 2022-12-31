// countdown timer code will go here
// Set the date we're counting down to
var countDownDate = new Date("Dec 31, 2022 16:48:00").getTime(),
    Exp = document.querySelector(".Exp"),
    Register = document.querySelector(".Register"),
    tiltlOfSpr= document.querySelector(".tiltlOfSpr"),
    ConMussage= document.querySelector(".ConMussage");

// Update the count down every 1 second
var x = setInterval(function () {
  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;
  let RedEffect = document.querySelectorAll('.in-countdown')
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
 function RedEffectFun(d) {
  for (let i = 0; i < RedEffect.length; i++) {
    if ((RedEffect[i].classList.contains('seconds') && RedEffect[i].textContent.replace(/\D/g, '') == '1') || d == 0 ) {
      RedEffect[i].classList.add("redBack")
    }
  else if (RedEffect[i].textContent.replace(/\D/g, '') == '0' && !RedEffect[i].classList.contains('seconds')) {
    RedEffect[i].classList.add("redBack")
  }else{
    RedEffect[i].classList.remove("redBack")
  }
}
 }
 RedEffectFun(1)
 
  

  // Display the result in the element with the class "countdown"
  // document.querySelector(".countdown").innerHTML = days + "d " + hours + "h "
  // +  + "m " + seconds + "s ";
  let Ddays = document.querySelector(".days"),
      Dhours = document.querySelector(".hour"),
      Dminutes = document.querySelector(".minutes"),
      Dseconds = document.querySelector(".seconds");
    Ddays.textContent = days + "d :";
    Dhours.textContent = hours + "h :";
    Dminutes.textContent = minutes + "m :";
    Dseconds.textContent = seconds + "s ";
   
  // If the count down is finished, write some text
  if (distance <= 0) {
    clearInterval(x);
    Ddays.textContent =  "0d :";
    Dhours.textContent = "0h :";
    Dminutes.textContent = "0m :";
    Dseconds.textContent = "0s";
    RedEffectFun(0)
    Exp.textContent = "EXPIRED";
    Register.innerHTML = " ";
    tiltlOfSpr.innerHTML = '<spain class="red">C</spain>ongratulations';
    ConMussage.textContent = 'our end! The surprise is over. Verify your email address';
    g = 1;
    for (let j = 0; j < 5; ++j ) {
      Exp.classList.remove("red")
    var ff = setTimeout(() => {
      Exp.classList.add("red")
      clearTimeout(ff)
    }, 500);
    

     
      // var dd = setInterval(() => {
      //   Exp.classList.add("red")
      //   clearInterval(dd)
      // }, 800);
      
    }
  }
  }, 1000);
  // var f = setInterval(function () {
  //   Exp.classList.add('red')
  //   Exp.classList.remove('red')
  // },300)
  
  

