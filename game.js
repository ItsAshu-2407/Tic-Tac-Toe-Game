let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#resetBtn");
let drawMsg = document.querySelector(".drawMsg");
let newBtn = document.querySelector("#newBtn");
let winningMsg = document.querySelector(".winningMsg");

let turnO = true;

let winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

let showWinner = (firstElement) => {
    winningMsg.innerText = `Congratulations Player${firstElement} Won the game.`;
    winningMsg.classList.remove("hideWin");
    disableBtn();
}

let disableBtn = () => {
    for(let val of btn){
        val.disabled = true;
    }
}

let resetGame = () => {
    for(let val of btn){
        val.disabled = false;
        val.innerText = "";
    }
    drawMsg.classList.add("hide");
    winningMsg.classList.add("hideWin");
    turnO = true;
    count = 0;
}

let newGame = () => {
    for(let val of btn){
        val.disabled = false;
        val.innerText = "";
    }
    drawMsg.classList.add("hide");
    winningMsg.classList.add("hideWin");
    turnO = true;
    count = 0;
}

// console.log(btn)
let btnClick =  (box)=>  {
    // debugger;
    if(turnO)
    {
        box.innerText = 'O';
        turnO = false;
    }
    else{
        box.innerText = "X";
        turnO = true;
    }
    box.disabled = true;
    checkWinner();
    checkDraw();
}
btn.forEach((box)=>{box.addEventListener("click",()=>btnClick(box))});

newBtn.addEventListener("click", () => {newGame(btn)});

resetBtn.addEventListener("click", () => {resetGame(btn)});
let temp;
let checkWinner = () => {
    for(let pattern of winningCondition){
        const firstElement = btn[pattern[0]].innerText;
        const secondElement = btn[pattern[1]].innerText;
        const thirdElement = btn[pattern[2]].innerText;
        // console.log(firstElement,secondElement,thirdElement);
        if(firstElement != "" && secondElement != "" && thirdElement !=""){
            if(firstElement === secondElement && secondElement === thirdElement){
                showWinner(firstElement);
                temp = true;
            }
        }
    }
}
let count = 0;
let checkDraw = () => {
    for(let pattern of winningCondition){
        var firstElement = btn[pattern[0]].innerText;
        var secondElement = btn[pattern[1]].innerText;
        var thirdElement = btn[pattern[2]].innerText;
        }
    for(let val of btn){
        if(val.innerText != ""){
            count++;
        }
    }
    console.log(count);
    if(count == 45){
        if((firstElement === secondElement || secondElement !== thirdElement) || (firstElement !== secondElement || secondElement === thirdElement) || temp != true){
            console.log("Game is draw, Please try again.");
            drawMsg.classList.remove("hide");
        }
    }
}