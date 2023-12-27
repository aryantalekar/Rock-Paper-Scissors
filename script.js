const rockButton = document.querySelector('#rockimg')
const paperButton = document.querySelector('#paperimg')
const scissorButton = document.querySelector('#scissorimg')
const newGame = document.querySelector('#newGame')
const playerScore = document.querySelector('#score1')
const computerScore = document.querySelector('#score2')
const result = document.querySelector('#result1')

const choices = ["rock","paper","scissor"]

rockButton.addEventListener('click',() => {
let randomNumber = Math.floor(Math.random() * 3);
let randomChoice = choices[randomNumber]

if (randomChoice == "rock") {
    result.innerHTML= "Tie, Computer Picked Rock"
}
if (randomChoice == "paper") {
    result.innerHTML= "You Lose, Computer Picked Paper"
    computerScore.innerHTML++
}
else{
    result.innerHTML= "You Win, Computer Picked Scissor"
    playerScore.innerHTML++
}
})

paperButton.addEventListener('click',() => {
    let randomNumber = Math.floor(Math.random() * 3);
    let randomChoice = choices[randomNumber]
    
    if (randomChoice == "rock") {
        result.innerHTML= "You Win, Computer Picked Rock"
        playerScore.innerHTML++
    }
    if (randomChoice == "paper") {
        result.innerHTML= "Tie, Computer Picked Paper"
    }
    if(randomChoice == "scissor"){
        result.innerHTML= "You lose, Computer Picked Scissor"
        computerScore.innerHTML++
    }
    })

    scissorButton.addEventListener('click',() => {
        let randomNumber = Math.floor(Math.random() * 3);
        let randomChoice = choices[randomNumber]
        
        if (randomChoice == "rock") {
            result.innerHTML= "You Lose, Computer Picked Rock"
            computerScore.innerHTML++
        }
        if (randomChoice == "paper") {
            result.innerHTML= "You Win, Computer Picked Paper"
            playerScore.innerHTML++
        }
        else{
            result.innerHTML= "Tie, Computer Picked Scissor"
        }
        })

newGame.addEventListener('click',() => {
    result.innerHTML = ""
    playerScore.innerHTML = 0
    computerScore.innerHTML = 0
})