
let cards = []; // Array to hold the player's drawn cards
let sum = 0; // Variable to keep track of the sum of the card values
let hasBlackJack = false; // Boolean flag to check if the player has hit Blackjack (sum of 21)
let isAlive = false; // Boolean flag to check if the player is still in the game (i.e., hasn't lost)
let message = ''; // Variable to store messages displayed to the player
let messageEl = document.getElementById('message-el'); // Reference to the element displaying the game messages
let sumEl = document.querySelector('#sum-el'); // Reference to the element displaying the sum of the cards
let cardEl = document.querySelector('#card-el'); // Reference to the element displaying the drawn cards

// Object representing the player, storing their name and chips (money)
let player = {
    Name: 'Eric',
    Chips: 145
}

// Reference to the element displaying the player's name and chips
let playerEl = document.querySelector('#player-el');
// Updating the text content to show player's name and available chips
playerEl.textContent += player.Name + ': $' + player.Chips;

function getRandomCard() {
    // Generate a random number between 1 and 13 to represent a card
    let randomNumber = Math.floor(Math.random() * 13) + 1;

    // If the random number is greater than 10, it's a face card (Jack, Queen, King) which should have a value of 10
    if (randomNumber > 10) {
        return 10;
    // If the random number is 1, treat it as an Ace which can be worth 11
    } else if (randomNumber === 1) {
        return 11;
    // Otherwise, return the number as it is (for cards 2-10)
    } else {
        return randomNumber;
    }
}

function startGame() {
    // Draw two cards at the beginning of the game
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; // Store the two cards in the 'cards' array
    sum = firstCard + secondCard; // Calculate the initial sum of the two cards
    isAlive = true; // Set the player status to alive (still in the game)
    renderGame(); // Call the renderGame function to update the display
}

function renderGame() {
    // Display the cards that have been drawn
    cardEl.textContent = 'Cards: ';
    
    // Loop through the 'cards' array to display each card
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + ' ';
    }

    // Display the current sum of the cards
    sumEl.textContent = 'Sum: ' + sum;

    // Check the sum of the cards and update the message accordingly
    if (sum < 21) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "Congratulations! You have won!"; // Player hits Blackjack
        hasBlackJack = true;
    } else {
        message = "Sorry, you have lost!"; // Player busts (sum is greater than 21)
        isAlive = false; // Player is no longer in the game
    }

    // Display the message to the player
    messageEl.textContent = message;
}

function newCard() {
    // Only allow drawing a new card if the player is still alive and hasn't hit Blackjack
    if (isAlive === true && hasBlackJack === false) {
        // Draw a new card and add it to the 'cards' array
        let card = getRandomCard();
        sum += card; // Add the new card value to the sum
        cards.push(card); // Add the new card to the cards array

        console.log(cards); // Log the current cards to the console for debugging purposes

        // Update the game display with the new card and sum
        renderGame();
    }
}
