// Selecting all the things we want to work on :
const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const resultDisplay = document.getElementById("result")
let userChoice
let computerChoice
let result

// Next step is getting all the possible choices :
const possibleChoices = document.querySelectorAll("button")

// Grab the buttons and put an event listner, then pass a function for when the events is triggered :
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener("click", (e) => {
// We have to get the target id :
userChoice = e.target.id
// User choice :
userChoiceDisplay.innerHTML = userChoice

// Generate a computer choice :
generateComputerChoice()

// Result :
getResult()

}))

function generateComputerChoice(){
    const randomNumber = Math.floor(Math.random() * 3) + 1 // Instead of 3 we could also write : possibleChoices.length
    
    if(randomNumber === 1){
        computerChoice = "rock"
    }

    if(randomNumber === 2){
        computerChoice = "scissors"
    }

    if(randomNumber === 3){
        computerChoice = "paper"
    }

    // Display the computer choice :
    computerChoiceDisplay.innerHTML = computerChoice
}


function getResult(){
    if(computerChoice === userChoice){
        result = "Its a draw!"
    }

    if(computerChoice === "rock" && userChoice === "paper"){
        result = "You win!"
    }

    if(computerChoice === "rock" && userChoice === "scissors"){
        result = "You lose!"
    }

    if(computerChoice === "paper" && userChoice === "scissors"){
        result = "You win!"
    }

    if(computerChoice === "paper" && userChoice === "rock"){
        result = "You lose!"
    }

    if(computerChoice === "scissors" && userChoice === "paper"){
        result = "You lose!"
    }
    if(computerChoice === "scissors" && userChoice === "rock"){
        result = "You win!"
    }

    // Display result :
    resultDisplay.innerHTML = result
}



