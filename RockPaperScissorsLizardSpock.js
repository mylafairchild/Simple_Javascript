//Welcome to Rock, Paper, Scissors, Lizard, Spock
//I know that this is a lot of repeating, and messy, I deleted the one that I wrote with a switch statement
//Myla Fairchild
//I failed the Fizzbuzz challenge and now I question my life choices

var userChoice = prompt("Do you choose rock, paper, scissors, lizard, or Spock?");
var computerChoice = Math.random();

console.log("Computer: " + computerChoice);
if (computerChoice < 0.23) 
{
	computerChoice = "rock";
} else 
	{
		if(computerChoice < 0.42) 
		{
			computerChoice = "paper";
		}			
	}
} else if(computerChoice < 0.62) {
	computerChoice = "lizard";
} else if(computerChoice < 0.82) {
	computerChoice = "spock";
} else {
	computerChoice = "scissors";
} console.log("Computer: " + computerChoice);


var compare = function(choice1, choice2) 
{
    if (choice1 === choice2) {
return "The result is a tie!";
    }
else if(choice1 === "rock") {
    if(choice2 === "scissors") {
        return "rock wins";
    }
    else {
        return "Spock wins";
    }
}
    else if(choice1 === "paper") {
        if(choice2 === "spock") {
            return "paper wins"
        }
        else {
            return "lizard wins"
        }
    }
    else if(choice1 === "paper") {
        if(choice2 === "rock") {
            return "paper wins"
        }
        else {
            return "scissors wins"
        }
    }
    else if(choice1 === "scissors") {
        if(choice2 === "paper") {
            return "scissors wins"
        }
        else {
            return "rock wins"
		}
	}
}
	compare(userChoice,computerChoice);
