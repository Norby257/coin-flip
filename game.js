//correctly link file 
console.log("We are linked");
//declare vars:
//img 
//wins
//losses 
var userGuess;
var wins;
var losses;
var computerChoices = ["h", "t"];
//computer picks random number 
////add function -user types a key 
document.onkeyup = function(event) {
    //store the result of that 
   var userGuess = event.key;
   //test to see if this works:
   console.log(userGuess);
   alert("You pressed " + userGuess);
   //make computer pick a key 
   var computerChoice = computerChoices[Math.floor(Math.random * computerChoices.length)];
   if(computerChoice === userGuess) {
       alert("You win!");
       wins++;
   }

   
   //compare results  - if match, then wins++; else losses++


};
//make computer pick a key 
//how to assign computer choice 
//how to select jquery 
