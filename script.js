const xPlayerClass = 'xShape'
const circlePlayerClass = 'circleShape'

const winningCombination = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]

const tttCells = document.querySelectorAll('[cell-data]')
const boardElement = document.getElementById('board')

const firstRow = document.getElementById('row1')
const secondRow = document.getElementById('row2')
const thirdRow = document.getElementById('row3')

const startBtn = document.getElementById('startGame')
const resTartBtn = document.getElementById('restartGame')
const msg = document.getElementById('msg')
const msgText = document.querySelector('[msg-text]')

let isCirclePlayerTurn

// class Player {
//     constructor(name){
//         this.name = name;
//         this.score = score;
//         this.round = round
//     }

//     getScore(){
//         console.log(`${this.name} score is ${this.score}`)
//     }
//     getRound(){
//         console.log(`${this.name} has played ${this.round}`)
//     }
// }
class Player {
    constructor(name) {
        this.name = name
        this.score = 0
        this.round = 0
    }
    getRound(){
        console.log(`${this.name} has played ${this.round}`)
    }
    getScore(){
        console.log(`${this.name} score is ${this.score}`)
    }
    upDateScore(){
        return this.score += 1
    }
    upDateRound(){
        return this.round += 1
    }
}

startGame()

const x = new Player('x')
console.log(x.round)
function startGame(){
    console.log('starting game')
    isCirclePlayerTurn = false
    tttCells.forEach(cell => {
        cell.classList.remove('xShape')
        cell.classList.remove('circleShape')
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    switchPlayer()
    msg.classList.remove('show')
}

function handleClick(e){
    const cell = e.target
  
    const currentClass = isCirclePlayerTurn? circlePlayerClass : xPlayerClass
    markCell(cell, currentClass)
    switchPlayer()
    

    if(checkWin(currentClass)){ 
        endGame(false)
    } else if (isDraw()){
        endGame(true)
    } else {
        //switchPlayer()
    }
  
  
}

function markCell(cell, currentClass){
    cell.classList.add(currentClass)
}
function checkWin(currentClass){
    return winningCombination.some(combination => {
        return combination.every(index => {
            return tttCells[index].classList.contains(currentClass)
        })
    })
}
  
  
function endGame(draw){
    
    if (draw) {
        msgText.innerText = `It's a draw!`
    } else {
        msgText.innerText = `${isCirclePlayerTurn ? 'Circle wins.':'X wins.'}`
       console.log(isCirclePlayerTurn)
        // update player
        // x.upDateRound()
        // console.log(x.round )
    }
    msg.classList.add('show')
}
    
function switchPlayer(){
    return isCirclePlayerTurn = !isCirclePlayerTurn
}

  
function isDraw(){
    return [...tttCells].every(cell => {
        return cell.classList.contains(xPlayerClass) || cell.classList.contains(circlePlayerClass)
    })
}

resTartBtn.addEventListener('click', startGame)