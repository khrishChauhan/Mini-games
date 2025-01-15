let cards = document.querySelectorAll(".card")
let yourScore = document.querySelector(".your")
let computerScore = document.querySelector(".computer")
let result = document.querySelector(".result")
let btn = document.querySelector(".btn")
let choice = ""
let your = 0;
let computer = 0;
isWin = true;

let genChoice = ()=> {
    let option  = ["stone","paper","scissor"];
    let randNum = Math.floor(Math.random()*3);
    return option[randNum];
}

let draw = () => {
    result.innerHTML = `<p class="result">Draw</p>`;
    your += 1;
    computer += 1;
    yourScore.innerText = `Your - ${your}`;
    computerScore.innerText = `Computer - ${computer}`;
}

let win = () => {
    your += 1;
    yourScore.innerText = `Your - ${your}`;
}

let lose = () => {
    computer += 1;
    computerScore.innerText = `Computer - ${computer}`;
}

cards.forEach((card)=>{
    card.addEventListener("click",()=>{
        if(card === cards[0]){
            choice = "stone";
        }else if(card === cards[1]){
            choice = "paper";
        }else{
            choice = "scissor";
        }
        
        let compChoice = genChoice();

        if(compChoice === choice){
            draw();
        }else{
            if(choice === "stone"){
                compChoice === "paper" ? isWin = false : isWin = true;
            }
            if(choice === "paper"){
                compChoice === "scissor" ? isWin = false : isWin = true;
            }
            if(choice === "scissor"){
                compChoice === "stone" ? isWin = false : isWin = true;
            }
            if(isWin){
                win();
                result.innerHTML = `<p class="result">Win by ${compChoice}</p>`;
            }else{
                lose();
                result.innerHTML = `<p class="result">Lose by ${compChoice}</p>`;
            }
        }
    })
})


btn.addEventListener("click",()=>{
    computer = 0 ;
    computerScore.innerText = `Computer - ${computer}`;
    result.innerHTML = `<p class="result">Click!!</p>`;
    your = 0;
    yourScore.innerText = `Your - ${your}`;
})









let promise = new Promise((resolve,reject)=>{
    console.log("i am promise")
});





