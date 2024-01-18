let attempts = 0;

let randomNumber = Math.floor(Math.random() *100 + 1);

const guess  = document.getElementById("guess");

const submit =document.getElementById("submit");

const hint = document.getElementById("hint");

const attemptsText = document.getElementById("Attempts");

//Event listeners

submit.addEventListener("click", checkGuess);

function checkGuess(){
    const userValue = Number(guess.value);
    attempts++;

    if(userValue === randomNumber){
        hint.textContent = "Congratulaions, you guessed the number!";
    }
    else if (userValue < randomNumber){
        hint.textContent ="My number is greater than " + userValue + ". Try again!";
    }
    else if(userValue > 100 || userValue < 1){
        hint.textContent = "Please enter the number between 1 and 100."
        
    }
    else {
        hint.textContent="My number is less than " + userValue + ". Try again!";
    }

    attemptsText.textContent = " Attempts : " + attempts ;
}

