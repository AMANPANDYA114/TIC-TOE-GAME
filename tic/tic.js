// This will select all elements with the class "cell" that are inside an element with the class "gameboard"
alert("do you want to play game then press ok");


const cellElements = document.querySelectorAll(".gameboard .cell");
// This will log the NodeList to the console so you can see the selected elements
const player1=document.querySelector(".player1");
const player2=document.querySelector(".player2");
const winningcondition=[
[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],
]

console.log(cellElements);
const playerO="O"
const playerX="x"
let toggleturn=true;
cellElements.forEach(cell=>
{
    console.log(cell);
    cell.onclick=()=>{
        // console.log(cell.innerHTML);
        // condition ? expressionIfTrue : expressionIfFalse
        

       let currentplayer= toggleturn?playerO:playerX;
        cell.classList.add("disable");
        cell.innerHTML=currentplayer;
        
       
        
        addincell(cell,currentplayer);

        swaplayer();
      
        if (currentplayer === playerO) {
            cell.style.color = 'blue';  // Color for Player O
        } else {
            cell.style.color = 'red';   // Color for Player X
        }
        checkWinner(); // add this line
    }
}

)

function addincell(cell, currentplayer) {
    cell.innerHTML = currentplayer;
    cell.classList.add(currentplayer);
}

function swaplayer()
{
   toggleturn= !toggleturn
   if (toggleturn) {
    
    player1.classList.add('active');
    player2.classList.remove('active');
} else {
 
    player2.classList.add('active');
    player1.classList.remove('active');
}

}

function checkWinner() {
    for (let i = 0; i < winningcondition.length; i++) {
        const [a, b, c] = winningcondition[i];
        // Check if these cells are not empty and have the same value
        if (cellElements[a].innerHTML && cellElements[a].innerHTML === cellElements[b].innerHTML && cellElements[a].innerHTML === cellElements[c].innerHTML) {
            announceWinner(cellElements[a].innerHTML);
            return;
        }
    }

    // Check if all cells are filled (draw condition)
    let isDraw = Array.from(cellElements).every(cell => cell.innerHTML === playerO || cell.innerHTML === playerX);
    if (isDraw) {
        announceWinner('Draw');
    }
}


// function announceWinner(winner) {
//     let audio = new Audio('Wrong ! Sound ! Effect.mp3');
//     audio.play() // play the sound
//     if (winner === 'Draw') {
//         alert('The game is a draw!');
//     } else {
//         alert(`Player ${winner} has won the game!`);
//     }
// }
function announceWinner(winner) {
    // document.querySelector('#gameboard').style.backgroundColor = 'red';

    let audio = new Audio('Wrong ! Sound ! Effect.mp3'); // load the sound

    audio.play() // play the sound

        .then(() => {
            // After the sound has played, show the alert
            if (winner === 'Draw') {
                alert('The game is a draw!');
            } else {
                alert(`Player ${winner} has won the game!`);
                // document.querySelector('#gameboard').style.backgroundColor = 'red';
                document.body.style.backgroundColor = 'red';

            }
        })
        .catch(error => console.log(error)); // log any error that occurred while playing the sound
}
