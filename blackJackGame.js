let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];// array of ordered list of cards
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = '';
let messageEl = document.getElementById('message-el');
let sumEl = document.querySelector('#sum-el');
let cardEl = document.querySelector('#card-el');


function getRandomCard() {
    let randomNumber = Math.floor(Math.random() *13) + 1;
}

function startGame() {
    renderGame();
}
function renderGame() {
    // Render out the first card and the second card
    cardEl.textContent = 'Cards: '
    // created a for loop that renders out all cards
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' ';
    }
    //
    sumEl.textContent = 'Sum: ' + sum
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You have won!";
        hasBlackJack = true;
    } else {
        message = "Sorry, you have lost!";
        isAlive = false;
    }
    messageEl.textContent = message;
}

function newCard() {
    let card = getRandomCard();
    sum += card
    cards.push(card);
    console.log(cards)
    renderGame();
 }





