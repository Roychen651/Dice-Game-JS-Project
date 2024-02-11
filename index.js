var diceImages = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];

// Generate random numbers for both players
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

// Get the <img> element for "Player 1" by its class name
var diceImageElement1 = document.querySelector(".img1");

// Set the src attribute of the <img> element for "Player 1" to the randomly selected dice image filename
diceImageElement1.src = "images/" + diceImages[randomNumber1 - 1]; // Adjusting for zero-based indexing and adding folder path

// Get the <img> element for "Player 2" by its class name
var diceImageElement2 = document.querySelector(".img2");

// Set the src attribute of the <img> element for "Player 2" to the randomly selected dice image filename
diceImageElement2.src = "images/" + diceImages[randomNumber2 - 1]; // Adjusting for zero-based indexing and adding folder path

// Get the <h1> element
var resultTextElement = document.querySelector("h1");

// Compare the dice values and update the text in <h1> accordingly
if (randomNumber1 > randomNumber2) {
    resultTextElement.textContent = "Player 1 Wins!";
} else if (randomNumber1 < randomNumber2) {
    resultTextElement.textContent = "Player 2 Wins!";
} else {
    resultTextElement.textContent = "It's a Draw!";
}