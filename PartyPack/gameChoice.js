// Myla Fairchild
// For my work peeps. Let's play some games!

var userQuestion = 'Greetings Professor Falken. Shall we play a game?';
var randomNumber = Math.floor(Math.random() * 8);
var gameIdea = "";

switch (randomNumber) {
  case 0:
    gameIdea = "Pictionary\n How to play: One person uses the generator to get the thing they are to draw. The others guess what it is.";
    break;
  case 1:
    gameIdea = "Two Truths and a Lie\n How to play: Jot down two real facts about you and one that is totally fake.\n Read them to your opponents and they have to guess which one is the lie!";
    break;
  case 2:
    gameIdea = "Heads Up!\n How to play: Use the generator to generate five categories like celebrities, movies, music, whatever and a word from that category and share with your teammates.\n One person is not to know what it is so other players can describe the word to them.\n This should be timed to guess five things correctly in one minute.\n The person with the most correct guesses on their turn wins!";
    break;
  case 3:
    gameIdea = "Scattergories\n How to play: Use the generator to choose a letter and five categories.\n Then, players have 60 seconds think of things related to each category that start with the assigned letter.\n You get a point for every category you get right and double if you do more than one.";
    break;
  case 4:
    gameIdea = "Charades\n How to play: Use the generator to generate a word or phrase and choose one person to present.\n That person has to act out (no talking or sounds permitted!) their assigned phrases for their teammates to try to guess.\n Each team takes turns guessing, and the more words and phrases a team guesses correctly, the more points they receive.\n The person with the most points wins!";
    break;
  case 5:
    gameIdea = "Scavenger Hunt\n How to play: Use the generator to spit out a list of 10 or so items that you want your coworkers to find in their homes.\n Get creative with it!";
    break;
  case 6:
    gameIdea = "Quiplash.\n How to play: Myla version madlibs.";
    break;
  case 7:
    gameIdea = "A strange game. The only winning move is not to play.";
    break;
  case 8:
    gameIdea = "Pay no attention to the man behind the curtain";
   default:
    break;
}

    console.log(userQuestion);
    console.log(gameIdea);