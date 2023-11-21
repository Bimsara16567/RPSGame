var your_choise= prompt("Your Choise, Press 1 to Rock, Press 2 to Paper, Press 3 to Scissor.");

var player_image= "./"+your_choise+".png";


document.querySelector("#picture1 img").setAttribute("src", player_image);







var randomnumber= Math.random()*3;
randomnumber= Math.floor(randomnumber)+1;

var randomimage= "./"+randomnumber+".png";

document.querySelector("#picture2 img").setAttribute("src",randomimage);


if(your_choise==randomnumber){
    document.querySelector("h1").innerHTML= "Draw!";
}else if(your_choise==1 && randomnumber==3){
    document.querySelector("h1").innerHTML= "You Win!";
}else if(your_choise==1 && randomnumber==2){
    document.querySelector("h1").innerHTML= "You Lose!";

}else if(your_choise==2 && randomnumber==1){
    document.querySelector("h1").innerHTML= "You Win!";
}else if(your_choise==2 && randomnumber==3){
    document.querySelector("h1").innerHTML= "You Lose!";

}else if(your_choise==3 && randomnumber==1){
    document.querySelector("h1").innerHTML= "You Lose!";
}else{
    document.querySelector("h1").innerHTML= "You Win!";
} 