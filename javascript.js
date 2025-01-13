var humanscore=0;
var computerscore=0;
function winner(a,b){
 if(a>b){
    alert("YOU ARE WINNER GAND MARAOO");
 }
 else if (a<b){
    alert("bhak saale computer se haar gaya bhadwa");
 }
 else{
    alert("DRAW");
 }
}
function PlayGame(x,y){
  if(x=="ROCK" && y=="SCISSOR"){
    humanscore++;
  }
  else if(x=="ROCK" && y=="PAPER"){
    computerscore++;
  }
  else if(x=="PAPER" && y=="ROCK"){
    humanscore++;
  }
  else if(x=="PAPER" && y=="SCISSOR"){
    computerscore++;
  } 
  else if(x=="SCISSOR" && y=="ROCK"){
   computerscore++;
  }
  else if(x=="SCISSOR" && y=="PAPER"){
  humanscore++;
  }
}

function getHumanChoice(){
   return prompt("ENTER:::   ROCK   PAPER    SCISSOR");
}

function getComputerChoice(){
    var r=Math.ceil(Math.random()*3);
    if(r==1){
       return "ROCK";
    }
    else if(r==2){
       return "PAPER";
    }
    else{
      return "SCISSOR";
    }
};
for(let i=0; i<5; i++){
    let x= getHumanChoice();
    let y= getComputerChoice();
    console.log(x);
    console.log(y);
    x.toUpperCase();
    PlayGame(x,y);
}
winner(humanscore,computerscore);





