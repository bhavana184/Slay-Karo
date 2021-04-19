const hamIcon = document.querySelector(".drop-down");
const hamBar = document.querySelector(".nav-ham");
const cross = document.querySelector(".ham-cross");

hamIcon.onclick =  function(){
  // hamBar.style.display = "block";
  document.querySelector('.nav-ham').style.width="45.5vw";
}

cross.onclick = function(){
  // hamBar.style.display = "none";
  document.querySelector('.nav-ham').style.width="0";
}

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

// mobile view testimonial carousel starts
var container = document.getElementById('image-center');
function scrollWin(x, y) {
  container.scrollBy(x, y);
}
var carousel1 = document.getElementById('test-newFtrbtn_div');
var firstVal1 = 0;
document.getElementById('test-newFtrbtn1_div').classList.add("over");
carousel1.addEventListener("click", function(){
  document.getElementById('test-newFtrbtn1_div').classList.remove("over");
  scrollWin(35,0);
});

var carousel1 = document.getElementById('test-newFtrbtn1_div');
var firstVal1 = 0;
carousel1.addEventListener("click", function(){
 document.getElementById('test-newFtrbtn_div').classList.remove("over");
 scrollWin(-35,0);

});
// mobile view testimonial carousel ends


// Contact us //
function send_msg() {
  console.log("inside send-msg");
  var Name = document.getElementById("user_name").value;
  var Number = document.getElementById("user_num").value;
  var Message = document.getElementById("user_msg").value;
  var Email = document.getElementById("user_email").value;


  var proceed = true;
  if(Name == ""){
    proceed = false;
  }

  if(Number == ""){
    proceed = false;
  }

  if(Message == ""){
    proceed = false;
  }

  if(Email == ""){
    proceed = false;
  }

  if(proceed){

    var xhttp = new XMLHttpRequest();

    xhttp.open("POST", "https://www.funnearn.com/api/contact-raven", true);

    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
    xhttp.send('&type=993&name='+Name+'&message='+Message+'&phone='+Number+ '&email='+Email);


    xhttp.onreadystatechange = function() {
      if (xhttp.readyState == 3 && xhttp.status == 200) {

      }
      else if (xhttp.readyState == 4 && xhttp.status == 200) {
        document.getElementById("send_btn").style.opacity = "50%";
        document.getElementById("user_name").value = "";
        document.getElementById("user_num").value = "";
        document.getElementById("user_msg").value = "";
        document.getElementById("user_email").value = "";
      }

    }
    var x = document.getElementById("snackbar1");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   console.log("displayed snackbar1");

  }else{
    var x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  // alert("check fields");
  console.log("displayed snackbar");
  }
}

// Contact us //



//Get app link

function getLink() {
var phone = document.getElementById("input_num").value;
console.log(phone);

if (phone) {

var xhttp = new XMLHttpRequest();

xhttp.open("POST", "https://www.funnearn.com/api/lagos/send-downloadable-links", true);
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
xhttp.send("type=993&&phone="+phone);
xhttp.onreadystatechange = function() {
if (xhttp.readyState == 3 && xhttp.status == 200) {}
else if (xhttp.readyState == 4 && xhttp.status == 200) {
document.getElementById("link_btn_div").style.opacity = "50%";

    }
  }
  document.getElementById("input_num").value = "";
  var x = document.getElementById("snackbar1");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   console.log("displayed snackbar1");
  }
  else{
    var x = document.getElementById("snackbar");
   x.className = "show";
   setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
   console.log("displayed snackbar");
  }
}
