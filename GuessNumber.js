let youWon = 0;
let youLost = 0;

for(i = 1; i<=5; i++){
        let guessNumber = parseInt(prompt("Enter a number between 1 to 5: "));
        let randomNumber = Math.floor(Math.random()*5)+1;

        if (guessNumber == randomNumber){
                console.log("You are right");
                youWon++;
        }else{
                console.log("You are wrong. Random number was " + randomNumber);
                youLost++;
        }
        


}
document.write("You Won = " + youWon + "<br>");
document.write("You lost = " + youLost + "<br>");

if(youWon>youLost){
        document.write("So You are a tiger");
        
}else if(youLost>youWon){
        document.write("So You are a Poysha");

}