let hand = ["rock", "paper", "scissors"]

function getRandomHand() {
    let randomNumber = Math.floor(Math.random() * 3)
    return hand[randomNumber]
}

console.log(getRandomHand())