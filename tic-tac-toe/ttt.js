// We want to access each button : 
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let newGameBtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");




// To play the game we naaed to make some variables, 
// (1.) Track which players turn it is X or O.
    
let turnO = true; // True means O's turn, false means X's turn.

// We will be strong our game patterns in 2D array :
// In console if we want to check the 0th index of arr2 it will come out to be the first array, then we can again acces its 0th index : arr[0][0];
/* let arr2 = 
   [ [],
    [],
    []];
*/

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

//Now we'll have to make a function to completely reset the game :
const resetGame = ()=>{
    turnO = true;
    enableBoxes();
    // Now we have to reset the entire game so.
    // Make msg container hide again :
    msgContainer.classList.add("hide");

}

// Now we have 9 buttons and something should happen when we click them, so we'll add event listners for each box :
boxes.forEach((box)=>{
    box.addEventListener("click", ()=> { // This means that whenever we click this arrow function => {} gets executed.
        console.log("Box was clicked");
        if(turnO === true){
            box.innerText = "O"; 
            turnO = false;
            box.classList.add("inv");
            
        }else{
            
            box.innerText = "X";
            turnO = true;
            box.classList.remove("inv");
            
        }
         // There will be a problem in the above, if we press the button again then it will change to x then o and so on so as soon as the button is pressed we have to disable that button :
         box.disabled = true;

         // Now as soon as our button gets pressed we have to check if there was a winner or not so we make a function :
         checkWinner();
    })
})

// Here as soon as we've got our winner we have to disable all the buttons so that the game doesn't go onn :
const disableBoxes = ()=>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(box of boxes){
        box.disabled = false;
        // Removing inner text :
        box.innerText = "";
    }
}

const showWinner = (winner) =>{
    msg.innerText = `Congrats, Winner is ${winner}`;
    // Then remove hide class from msg-container :
    msgContainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner = () =>{
    // We'll have to check for the win patterns :
    for(let pattern of winPatterns){ // Pattern here is an element and at every clicking of any box all the winning patterns are being checked.
 
/*        console.log([pattern[0]], [pattern[1]],[pattern[2]]);
        console.log( // Here we're getting individual elements. And then we can check for boxes, meaning go into boxes array and check for that particular index.
            boxes[pattern[0]].innerText, // Now using innerText we are getting theh innerText value.
            boxes[pattern[1]].innerText, 
            boxes[pattern[2]].innerText
            ); 
*/
            // Now we'll have the above inner texts into variable position because they are essentially positions :
            let pos1Val = boxes[pattern[0]].innerText;
            let pos2Val = boxes[pattern[1]].innerText;
            let pos3Val = boxes[pattern[2]].innerText;

            // Now to check for the winning pattern, if only one position is filled or 2 positions are filled then we wouldnt have a winner, we;ll only have a winner if all 3 positions are filled :
            if(pos1Val != "" && pos2Val !="" && pos3Val !=""){
                if(pos1Val === pos2Val && pos2Val === pos3Val){ // Meaning pos1 = pos2 = pos3.
                    console.log("winner", pos1Val); // We'll print the winner i.e. pos1value.

                    // To show winner we can make anotehr function :
                    showWinner(pos1Val);
                }
            }

    }
};

// Reset btn will trigger when newGame btn is clicked so add an event listner on it :
newGameBtn.addEventListener("click", resetGame);
reset.addEventListener("click", resetGame);