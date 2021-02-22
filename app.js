/**
  * Global Variables...
  */

  // to get our correct number, 
  //also number greater and less from the correct number..
 let correctNumber = getRandomNumber();
 let guesses = new Array();
 
 /**
     * Our on click listener..
     * Whe our button is clicked on html, this what happens...
     * It listens for ever click events and call the method...
     */
window.onload = function(){
   
     //Play Game...
    document.getElementById('number-submit').addEventListener('click', playGame);

    //Restart game...
    document.getElementById('restart-game').addEventListener('click', restartGame);

}


/**
 * Our playGame method....
 * 
 * This method does alot...
 * Read docs insize, thanks...
 */

function playGame(){
    //getting number from textFiels
     let numberGuess = document.getElementById('number-guess').value;

     //To display our result....
     displayResult(numberGuess);

     saveGuessHistory(numberGuess);
     displayHistory();
 }

 /**
  * Get Random number
  */
 function getRandomNumber(){
    let randomNumber = Math.floor(Math.random() * 200) + 1;
    return randomNumber;
    
  }

   

 /**
  * To check the user's input..
  * If guess is lower than the right one
  * or guess is higher
  * or guess matches the correct guesss....
  */
 function displayResult(numberGuess){
     //if its greater...
     if(numberGuess > correctNumber){
         guessIsHigh();
     }

     //if its lesser...
     else if(numberGuess < correctNumber){
         guessIsLow();
     }

     //if its correct...
     else{
         correctGuess();
     }
 }

 /**
  * 
  */
 function getDialog(dialogType, text){
    let dialog;
    switch(dialogType){
      case "warning":
        dialog = "<div class='alert alert-warning' role='alert'>"
        break;
      case "won":
        dialog = "<div class='alert alert-success' role='alert'>"
        break;
    }
    dialog += text;
    dialog += "</div>"
    return dialog;
  }

 /**
  * If the number greater than
  */
 function guessIsHigh(){
     //text displaying...
     const text = "Guess is too High...";

     //Dialog method...
     let dialog = getDialog('warning', text);

     //Writting into our result in html id...
     document.getElementById("result").innerHTML = dialog;

 }
 function guessIsLow(){
    //text displaying...
    const text = "Guess is too Low...";

    //Dialog method...
    let dialog = getDialog('warning', text);

    //Writting into our result in html id...
    document.getElementById("result").innerHTML = dialog;

}


 /**
  * If the number guess is correct
  */
 function correctGuess(){
    const text = "Correct!!, You won..";
  
    let dialog = getDialog('won', text);
    document.getElementById("result").innerHTML = dialog;
  }

  /**
   * Saving histories
   */
  function saveGuessHistory(guess) {
  guesses.push(guess);
  
  }

  /**
   * Displaying guess histories..
   */
  function displayHistory() {
    let index = guesses.length -1;
    let list = "<ul class='list-group'>"; 
  
    while(index >=0){
      list += "<li class='list-group-item'>" + "You Guessed"
       + ' ' + guesses[index] + "</li</ul>";
  
       index--;
    }
  
    list += '</ul>'
  
  
    document.getElementById("history").innerHTML = list;
  }
  

 /**
  * To restart our Game..
  */
 function restartGame(){

 }

