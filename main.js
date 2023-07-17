
const grid = document.querySelector('.grid');

for (let i = 0; i < 20; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', "square")
    square.style.backgroundColor = 'orange'
    grid.appendChild(square)
}
for (let i = 0; i < 20; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', "square")
    square.style.backgroundColor = 'skyblue'
    grid.appendChild(square)
}
for (let i = 0; i < 20; i++) {
    const square = document.createElement('div');
    square.setAttribute('id', "square")
    square.style.backgroundColor = 'brown'
    grid.appendChild(square)
}

let playerTurn = document.querySelector('.currentPlayerTurn');
let result = document.querySelector('.result');
let playerOneIndex = 58;
let playerTwoIndex = 59;
let homeIndex = 0;
let playerOne = "&#9786;"
let playerTwo = "&#9787;"

let squares = Array.from(document.querySelectorAll('.grid div'))
let player1 = squares[playerOneIndex].classList.add('playerOne')
let player2 = squares[playerTwoIndex].classList.add('playerTwo')
squares[playerOneIndex].innerHTML = playerOne
squares[playerTwoIndex].innerHTML = playerTwo;
// let player =  () =>{
//     for(let i = 0; i< players.length;i++){
//         squares[players[i]].classList.add('players')
//     }

// }
// player();
//dice
//dices
let playerOneName = prompt("enter you name: ")
let playerTwoName = prompt("enter you name: ")
let currentPlayer = playerOne;
let countWinOne = 0;
let countWinTwo = 0;
const playerBtnOne = document.getElementById('rollOne');
const playerBtnTwo = document.getElementById("rollTwo")
const diceOne = document.getElementById('diceOne');
const diceTwo = document.getElementById('diceTwo')
// const home = document.getElementById('square');

squares[homeIndex].classList.add('home');
squares[homeIndex].style.backgroundColor = "black";
//getting dice face
let getDiceFace = (rollResultOne) =>{
    switch(rollResultOne){
        case 1: {
            return "&#9856;"
        } case 2: {
            return "&#9857;"
        } case 3: {
            return "&#9858;"
        } case 4: {
            return "&#9859;"
        } case 5: {
            return "&#9860;"
        } case 6: {
            return '&#9861;'
        } default: {
            return ''
        }
    }
}
let restartBtn = document.getElementById('restart');

restartBtn.addEventListener('click',()=>{
location.reload();
})
// conflict dices
let conflict = () =>{
    if(squares[playerOneIndex].classList.contains('playerTwo')) {
      console.log(playerTwo,'won')
      result.innerHTML = playerTwoName + "  you won the match"
        playerBtnOne.innerHTML = '';
        playerBtnTwo.innerHTML = '';
    }else if(squares[playerTwoIndex].classList.contains('playerOne')){
        result.innerHTML = playerOneName + "  you won the match"
        playerBtnOne.innerHTML = '';
        playerBtnTwo.innerHTML = '';
    }
  
  } 

//wincondition
// let winCondition = () =>{
//     if(squares[playerOneIndex].classList.contains('home')){
//         console.log('you won')
//         result.innerHTML = "YOU WOn the Match " + playerOne
//     }else if(squares[playerTwoIndex].classList.contains('home')){
//         result.innerHTML = "YOu won the match "+ playerTwo;
//     }
// }
  
//roll dices

let rollDiceOne  = () =>{
    rollResultOne =Math.floor(Math.random() * 5) + 1 

        let diceFace = getDiceFace(rollResultOne)
        diceOne.innerHTML = diceFace;
        conflict();
        winOne();
}
let rollDiceTwo  = () =>{
    rollResultTwo =Math.floor(Math.random() * 5) + 1 

    let diceFace = getDiceFace(rollResultTwo)
    diceTwo.innerHTML = diceFace;
    conflict();
    winTwo();
}


//win
let winOne = () =>{
    countWinOne += rollResultOne 
    if(countWinOne > 59 ){
        result.innerHTML = "you won "+ playerOneName;
    }
} 
let winTwo = () =>{
    countWinTwo += rollResultTwo;
    if(countWinTwo > 58){
        result.innerHTML = "you won "+ playerTwoName; 

    }
}

rollDiceOne();
rollDiceTwo();
//button for dice one
playerBtnOne.addEventListener('click',()=>{
    diceOne.classList.add('roll-animation')
    setTimeout(()=>{
        diceOne.classList.remove('roll-animation')
        rollDiceOne();
        movePlayerOne();
        playerChange();
        // winCondition();
        conflict();
        winOne()       
    },1000)
})
//button for dice two
playerBtnTwo.addEventListener('click',()=>{
    diceTwo.classList.add('roll-animation')
    setTimeout(()=>{
        diceTwo.classList.remove('roll-animation')
        rollDiceTwo();
        movePlayerTwo();
        playerChange();
        // winCondition();
        winTwo();
        conflict();
    },1000)
})

// rollDiceOne();
// rollDiceTwo();



// const getDiceFace2 = (rollResultTwo) =>{
//     switch(rollResultTwo){
//         case 1: {
//             return "&#9856;"
//         } case 2: {
//             return "&#9857;"
//         } case 3: {
//             return "&#9858;"
//         } case 4: {
//             return "&#9859;"
//         } case 5: {
//             return "&#9860;"
//         } case 6: {
//             return '&#9861;'
//         } default: {
//             return ''
//         }
//     }
// }

// let currentPlayer = playerOne;


let winningPlayer = () =>{
    `Player ${currentPlayer} is Won...`
}
let currentPlayerTurn = () =>{
    `It's ${currentPlayer} turn.`
    }


// //player move forward player one
let playerRollOne = rollResultOne;
let movePlayerOne = () => {
    squares[playerOneIndex].classList.remove('playerOne')
    squares[playerOneIndex].innerHTML = ''
    console.log(rollResultOne)
    switch (rollResultOne) {
        case 1:{

            playerOneIndex -= 1
            // console.log(playerOneIndex)
            break;
        }
        case 2:{

            playerOneIndex -= 2
            break;
        }
        case 3:{

            playerOneIndex -= 3
            break;
        }
            
        case 4:{

            playerOneIndex -= 4
            break;
        }
        case 5:{

            playerOneIndex -= 5
            break;
        }
        case 6:{

            playerOneIndex -= 6
            break;
        }
    }

    squares[playerOneIndex].classList.add('playerOne');
    squares[playerOneIndex].innerHTML = playerOne

}
//player roll forward
let  playerRollTwo = rollResultTwo
let movePlayerTwo = () => {
    
    squares[playerTwoIndex].classList.remove('playerTwo')
    squares[playerTwoIndex].innerHTML = ''

    switch (rollResultTwo) {
        case 1:
             {
                 playerTwoIndex -= 1
                break;
            }
        case 2:
             {
                playerTwoIndex -= 2
                break;
            }
        case 3:
             {
                playerTwoIndex -= 3
                break;
            }
        case 4:
             {
                playerTwoIndex -= 4
                break;
            }
        case 5:
             {
                playerTwoIndex -= 5
                break;
            }
        case 6:
             {
                playerTwoIndex -= 6
                break;
            }
    }

    squares[playerTwoIndex].classList.add('playerTwo');
    squares[playerTwoIndex].innerHTML = playerTwo

}

let playerChange = () =>{
    currentPlayer = currentPlayer === playerOne ? playerTwo :playerOne;
    playerTurn.innerHTML ="This is your Turn " +currentPlayer;
}



