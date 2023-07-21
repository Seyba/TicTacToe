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
const msgText = document.getElementById('msg-text')
let isCirclePlayerTurn


startGame()

function startGame(){
    console.log('starting game')
    isCirclePlayerTurn = false
    tttCells.forEach(cell => {
        cell.classList.remove('xShape')
        cell.classList.remove('circleShape')
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
    //msgText.innerText = ''
    //msg.appendChild(msgText)
}

function handleClick(e){
    const cell = e.target
  
    const currentClass = isCirclePlayerTurn? circlePlayerClass : xPlayerClass
    cell.classList.add(currentClass)
    switchPlayer()

    if(checkWin(currentClass)){
        endGame(false)
    } else if(isDraw){
        endGame(true)
        //switchPlayer()
        console.log('it is a draw')
    } else {
        console.log('game over')
        switchPlayer()
       
    }

    // if(checkWin(currentClass)){
    //     endGame(false)
    // } else if(isDraw) {
    //     endGame(true)
    // } else {
    //     switchPlayer()
    // }
  
  
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
    }
    msgText.innerText = ''
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