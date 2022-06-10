console.log('Welcome to my number prediction app.\nINSTRUCTIONS:\n 1. You will be prompted to provide your name to play the game.\n 2. To progress in this game correctly guess a number between a given range.\n 3. A correct answer is five points.\n 4. If you fail to predict correctly that will be the end of the game.\n\n');

//declaration and instantiation of variable
let score = 0; //stores the total score
let i = 1;  //stores beginning of the range
let n = 1; //stores the end point of the range
let guessNumber = 0; //stores the number to be guessed
let ans = 0 //stores the response of the user
let next = true;

//prompt user to enter name
let name = prompt('Please, Enter your name:')

function myFunction(i,n){
  while (next) {
    console.log(`\nWELCOME TO STAGE ${n}`)
    n += i;
    //stores my preferred numer
    guessNumber= Math.floor(Math.random()*n)+1;
    console.log(guessNumber);
    console.log(`I chose a number between ${i} and ${n}. Can you guess what number it was?`);
    ans = parseInt(prompt());        
    if(ans === guessNumber ){
      score +=5;
      console.log(`Congratulations ${name}!!! You have ${score} points`);
    }
    else{
      if(score === 0)
        console.log(`Opps! ${name}, You got it wrong. \nYou have a total of ${score} point. Try again next time!`);
      else
        console.log(`Opps! ${name}, You got it wrong. \nYou have a total of ${score} points. Try again next time!`);
      break;
    }  
  }
}
myFunction(i,n)
console.log('\n\nTHANK YOU FOR PLAYING THIS GAME')

