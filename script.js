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
let isCirclePlayerTurn


startGame()

function startGame(){
    console.log('starting game')
    //isCirclePlayerTurn = false
    tttCells.forEach(cell => {
        cell.classList.remove('xShape')
        cell.classList.remove('circleShape')
        cell.removeEventListener('click', handleClick)
        cell.addEventListener('click', handleClick, {once: true})
    })
}

handleClick = ()=> {
    
}
