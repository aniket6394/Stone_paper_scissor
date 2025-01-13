function getComputerChoice(){
    var r=Math.ceil(Math.random()*3);
    if(r==1){
       return "ROCK";
    }
    else if(r==2){
       return "PAPER";
    }
    else{
      return "SCISSORS";
    }
};
console.log(getComputerChoice());