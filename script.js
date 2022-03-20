let firstCard = getRandomCard()
let secondCard = getRandomCard()
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true

let responseMessage = ""
let theTotal = document.getElementById("total-element")
let myCards = document.getElementById("card-element")


///////////////////////////////////////////////////////
let player = {
  name: "Marcella",
  money: 0
}
////////////////////////////////////////////////////////

let playerElement = document.getElementById("player-element")
playerElement.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  return Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame () {
  playGame()
}


function winMoney() {
  player.money = 10
  console.log("You won money!")
  playerElement.textContent = player.name + ": $" + player.money
  
}

function playGame () {
  // calculation when button is pressed
  myCards.textContent = "Cards: "
  for (let i = 0; i < cards.length; i++) {
    myCards.textContent += cards[i] + " "
  }
  
  let newText = "Total: " + sum
  theTotal.textContent = newText
  
  if (sum < 21) {
    responseMessage = "Do you want another card?"
  }
  else if (sum === 21) { //WIN
    responseMessage = "Blackjack!"
    hasBlackjack = true
    winMoney()
  }
  else {
    isAlive = false
    responseMessage = "You lose!"
  }
  //result after button is pressed
  console.log(responseMessage)
  console.log("Sum: " + sum)
  
  document.getElementById("gameResult").innerText = responseMessage
 
}

function newCard() {
  if (isAlive === true && hasBlackjack === false) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    console.log(cards)
    playGame()
  }

}
