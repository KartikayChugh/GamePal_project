const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0
let hitPosition
let currentTime = 60
let timerId = null

function randomSquare(){
    // Step 1 :  remove mole class :
    squares.forEach(square =>{ // This means that for each square in our squares array we essentially want to remove the mole class in any of the squares.
        square.classList.remove('mole')
    } ) 

    // Step 2 : add mole randomly : (to do so we'll go into our squares array and pass a random number)
    let randomSquare = squares[Math.floor(Math.random() * 9)]
    randomSquare.classList.add('mole')

    // We'll be getting the id of the squares hit :
    hitPosition = randomSquare.id
}

squares.forEach(square => {
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++
            score.textContent = result
            hitPosition = null
        }
    })
})


// In the above we have a blue square/mole appearing at a random position, but now we want to put that on a timer, we'll write another function and 
// write it there in the function so that we can also connect it to a button later :
function moveMole(){

    // The below function in timeId increases the speed of the mole every 10 seconds :
    timerId = setInterval(() => {
        randomSquare()
        if(currentTime % 10 === 0){
            clearInterval(timerId)
            moveMole()
        }
    }, 1000) // Means calling randomSquare function at an interval of 500miliseconds.
}

moveMole() // Envoked function.

// Now we want our timer to start working :
function countDown() {
    currentTime--
    // To display the currentTime in timeleft :
    timeLeft.textContent = currentTime

    // When timer hits 0 :
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timerId)
        alert('GAME OVER, your final score is : ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)


