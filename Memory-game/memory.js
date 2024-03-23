const cardArray = [
    // Objects : 12 cards with 2 matching each time :
    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    },


    {
        name : 'fries',
        img : 'images/fries.png',
    },
    {
        name : 'cheeseburger',
        img : 'images/cheeseburger.png',
    },
    {
        name : 'hotdog',
        img : 'images/hotdog.png',
    },
    {
        name : 'ice-cream',
        img : 'images/ice-cream.png',
    },
    {
        name : 'milkshake',
        img : 'images/milkshake.png',
    },
    {
        name : 'pizza',
        img : 'images/pizza.png',
    }
    
    
]

// Sort the cards randomly :
cardArray.sort(() => 0.5 - Math.random())

// Now to make our grid :
const gridDisplay = document.querySelector('#grid')

// Result array :
const resultDisplay = document.querySelector('#result')

// Another array : (We're making it const because we wouldn't be changing it)
let cardsChosen = []

// Another array : here we save the Ids of the card chosen.
let cardsChosenIds = []

// Array to save the numeber of cards won :
const cardsWon = []

console.log(gridDisplay)

function createBoard () {
    // For each item in our array we wantto create an element :(for this we can use a foreach or for loop.)
    for(let i=0; i<cardArray.length; i++){
        const card = document.createElement('img')
        // We have created element img now we want to give it the images from our image folder :
        card.setAttribute('src', 'images/blank.png')
        // We'll also add a data id that each card has a unique id:
        card.setAttribute('data-id', i)

        // Now we'll add an event listner to help in cunction flipCard : (We are not calling flipCard)
        card.addEventListener('click', flipCard)

        // Now we'll put these in the gridDisplay or inbetween div tags in our html just using JS : (For this we can use append or appendChild )
        gridDisplay.appendChild(card)
    }
}

// Function to check if the selected cards match :
function checkMatch(){

    // getting every single card on the grid :
    const cards = document.querySelectorAll('img')

    const optionOneId = cardsChosenIds[0]
    const optionTwoId = cardsChosenIds[1]

    // Alert for if we clicked on the same cards again :
    if(optionOneId == optionTwoId){
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')
        alert("you've clicked the same card")
    }

    // Here firstly we want to get both of he cards in my chosenCard array to check if they match :
    else if(cardsChosen[0] === cardsChosen[1]){

        alert("You've found a match")

        // Now once we've found the matching images we'll replace them with a white screen/image :
        cards[optionOneId].setAttribute('src', 'images/white.png')
        cards[optionTwoId].setAttribute('src', 'images/white.png')

        // Then we remove event listener to stop looking out for clicks on these matched cards, we are basically removing the ability to click on a card :
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        
        // Now we push in the content of the cardsChosen array into the cardsWon array :
        cardsWon.push(cardsChosen)
    } else{
        // If its not a match then we want ti flip them back again or make them blank again :
        cards[optionOneId].setAttribute('src', 'images/blank.png')
        cards[optionTwoId].setAttribute('src', 'images/blank.png')

        alert('Sorry try again!!!')

    }


    // Result showed as the user progresses :
    resultDisplay.textContent = cardsWon.length

    // After all the above we again need to start again so we'll make the cardsChosen array ans cardsChosen ids array empty again :
    cardsChosen = []
    cardsChosenIds = []


     // End of game meaning all the cards are open/displayed :
    if(cardsWon.length == (cardArray.length/2)){
        resultDisplay.textContent = 'Congratulations you found all!'
           
    }
}




// Function that allows us to flip the card when we click it :
function flipCard(){
    // Once user clicks on any card we want that cards data-id : (we use this keyword which allows us to use whatever element user clicked)
    const cardId = this.getAttribute('data-id')
    
    // We want the data-id becuase using that id or number we'll pass it into our array and get the image we're wanting.
    // So will pass id through the card array to get the name :
    

    // Now we are getting the name from our random card array what we'll do is out it into another array : (cardsChosen)
    // Also we'll push the itmes into the new array :
    cardsChosen.push(cardArray[cardId].name)

    // Pushing the ids of the chosen cards :
    cardsChosenIds.push(cardId)

    // Now after adding name we want to add image :
    this.setAttribute('src', cardArray[cardId].img)

    // Now we'll do match once 2 cards are clicked :
    if(cardsChosen.length === 2){
        //SetTimeout is a timing event or a JS method that will call a function after a certain amount of time is passed.
        setTimeout(checkMatch, 500) // 500 millisecond and we make a function checkMatch.
    }

}

createBoard()