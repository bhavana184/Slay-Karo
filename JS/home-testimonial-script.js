/*ABOUT US CAROUSEL STARTS*/
/*Carousel*/
var carousel1 = document.getElementById('test-newFtrbtn_div');
var firstVal1 = 0;
document.getElementById('test-newFtrbtn1_div').classList.add("over");
carousel1.addEventListener("click", function(){
  document.getElementById('test-newFtrbtn1_div').classList.remove("over");
  if (firstVal1 < 3)
  {
  	firstVal1 +=1;
    console.log("firstVal1: ",firstVal1);
    // setting about body
    if(firstVal1==0){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('photo-img').src="./images/player1.png";
      document.getElementById('text-heading').innerHTML="Paulwilson Paul";
      document.getElementById('text-body').innerHTML="  Slay karo is the best app to play since it helps you  earn money while playing the game.";
    }else if(firstVal1==1){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('photo-img').src="./images/player2.png";
      document.getElementById('text-heading').innerHTML="Divya Jain";
      document.getElementById('text-body').innerHTML="  This game is very interesting. I have played slaykaro. It's fun when you play games for money.";
    }else if(firstVal1==2){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('photo-img').src="./images/player3.png";
      document.getElementById('text-heading').innerHTML="Sristi Chandra";
      document.getElementById('text-body').innerHTML="  This game is very interesting. I have played slaykaro. Playing with money amazing.";
      document.getElementById('test-newFtrbtn_div').classList.add("over");
    }

    //setting about body ends
	}
  else {
    console.log("firstVal1 inside else: ",firstVal1);
  }

});

var carousel1 = document.getElementById('test-newFtrbtn1_div');
var firstVal1 = 0;
carousel1.addEventListener("click", function(){
  document.getElementById('test-newFtrbtn_div').classList.remove("over");
  if (firstVal1 < 3)
  {
    console.log("firstVal1: ",firstVal1);
    console.log("entered on left click: "+firstVal1);
  	firstVal1 -=1;

    // setting body starts
    if(firstVal1==0){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('test-newFtrbtn1_div').classList.add("over");
      document.getElementById('photo-img').src="./images/player1.png";
      document.getElementById('text-heading').innerHTML="Paulwilson Paul";
      document.getElementById('text-body').innerHTML="  Slay karo is the best app to play since it helps you  earn money while playing the game.";
    }else if(firstVal1==1){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('photo-img').src="./images/player2.png";
      document.getElementById('text-heading').innerHTML="Divya Jain";
      document.getElementById('text-body').innerHTML="  This game is very interesting. I have played slaykaro. It's fun when you play games for money.";
    }else if(firstVal1==2){
      console.log("firstVal1: ",firstVal1);
      document.getElementById('photo-img').src="./images/player3.png";
      document.getElementById('text-heading').innerHTML="Sristi Chandra";
      document.getElementById('text-body').innerHTML="This game is very interesting. I have played slaykaro. Playing with money amazing.";

    }
    // setting body ends
	}
  else{
    console.log("firstVal1: "+firstVal1);
    firstVal1 -=1;
    console.log("firstVal1: ",firstVal1);
    document.getElementById('photo-img').src="./images/player2.png";
    document.getElementById('text-heading').innerHTML="Divya Jain";
    document.getElementById('text-body').innerHTML="  This game is very interesting. I have played slaykaro. It's fun when you play games for money.";
  }

});
/*ABOUT US CAROUSEL ENDS*/
