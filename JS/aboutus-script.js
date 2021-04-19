/*
const hamIcon = document.querySelector(".drop-down");
const hamBar = document.querySelector(".nav-ham");
const cross = document.querySelector(".ham-cross");

hamIcon.onclick =  function(){
  document.querySelector('.nav-ham').style.width="45.5vw";
}

cross.onclick = function(){
  document.querySelector('.nav-ham').style.width="0";
}
*/
/*ABOUT US CAROUSEL STARTS*/
/*Carousel*/
var carousel1 = document.getElementById('newFtrbtn_div');
var firstVal1 = 0;
document.getElementById('newFtrbtn1_div').classList.add("over");
carousel1.addEventListener("click", function(){
  document.getElementById('newFtrbtn1_div').classList.remove("over");
  if (firstVal1 < 3)
  {
  	firstVal1 +=1;
    console.log("firstVal1: ",firstVal1);
    // setting about body
    if(firstVal1==0){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('center-text-h1').innerHTML="About Us";
      document.getElementById('center-text-body').innerHTML="Aim and kill insects in given time to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Kill !!";
    }else if(firstVal1==1){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('center-text-h1').innerHTML="What you have to do?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
    }else if(firstVal1==2){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('center-text-h1').innerHTML="How to Withdraw Your Winnings?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";
      document.getElementById('newFtrbtn_div').classList.add("over");
    }

    //setting about body ends
	}
  else {
    console.log("firstVal1 inside else: ",firstVal1);
  }

});

var carousel1 = document.getElementById('newFtrbtn1_div');
var firstVal1 = 0;
carousel1.addEventListener("click", function(){
  document.getElementById('newFtrbtn_div').classList.remove("over");
  if (firstVal1 < 3)
  {
    console.log("firstVal1: ",firstVal1);
    console.log("entered on left click: "+firstVal1);
  	firstVal1 -=1;

    // setting body starts
    if(firstVal1==0){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('newFtrbtn1_div').classList.add("over");
      document.getElementById('center-text-h1').innerHTML="About Us";
      document.getElementById('center-text-body').innerHTML="Aim and kill insects in given time to collect the points.Get more points than your opponent to win big cash rewards.You can also instantly transfer your winnings to the PayTM Wallet.<br>Get,Set and Kill !!";
    }else if(firstVal1==1){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('center-text-h1').innerHTML="What you have to do?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
    }else if(firstVal1==2){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('center-text-h1').innerHTML="How to Withdraw Your Winnings?";
      document.getElementById('center-text-body').innerHTML="<ol><li>Simply enter the Paytm number.</li><li>Enter amount.</li><li>Withdraw.</li></ol>";

    }
    // setting body ends
	}
  else{
    console.log("firstVal1: "+firstVal1);
    firstVal1 -=1;
    console.log("firstVal1: ",firstVal1);
    document.getElementById('center-text-h1').innerHTML="What you have to do?";
    document.getElementById('center-text-body').innerHTML="<ol><li>Download the app.</li><li>Register with the mobile number.</li><li>Wait for the system to find a opponent for you.</li><li>Aim and Shoot maximum objects and win the points -> Collect more points than opponent -> Win Real Paytm Cash.</li></ol>";
  }

});
/*ABOUT US CAROUSEL ENDS*/
