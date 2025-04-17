let youWon = 0;
let youLost = 0;

for(i = 1; i<=3; i++){
        let guessNumber = parseInt(prompt("Enter a number between 1 to 5: "));
        let randomNumber = Math.floor(Math.random()*5)+1;

        if (guessNumber == randomNumber){
                console.log("You are right..! Your Number was " + guessNumber +  ", and Random Number was " + randomNumber);
                youWon++;
        }else{
                console.log("You are wrong. Random number was " + randomNumber + ", and Your Number was " + guessNumber);
                youLost++;
        }
        
}

let resultDiv = document.getElementById("Result");

resultDiv.innerHTML += "You Won = " + youWon + "<br>";
resultDiv.innerHTML += "You lost = " + youLost + "<br>";

if(youWon>youLost){

        resultDiv.innerHTML += "So You are a Tiger..!!!";
        
}else if(youLost>youWon){

        resultDiv.innerHTML += "So You are a Poysha :(";

}