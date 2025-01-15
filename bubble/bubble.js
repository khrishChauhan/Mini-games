let botm = document.querySelector(".botm");
let timer = document.querySelector(".timer");
let hitScore = document.querySelector(".hit");
let scoreBox = document.querySelector(".score");
let score = 0;
let hitCheck = 0;


let makeBubble = ()=>{
    for(let i = 0 ; i<168 ; i++ ){
        botm.innerHTML += `<div class="bubble">${Math.floor(Math.random()*10)}</div>`
    };
}

let timeStart = ()=>{
    let second = 30;
 
    let setTime = setInterval(()=>{

        if(second == 0){
            botm.innerHTML = `<h1 class="over">Game over - </h1> <br> <button class="btn">Restart</button>`
        }
    
        if (second >= 0 ){
            timer.innerText = second;
            second--
        }else{
            clearInterval(setTime)
        }
    },1000)

    
} 

let newHit = ()=>{
    hitScore.innerText = Math.floor(Math.random()*10);
    hitCheck = hitScore.innerText;
}

let addScore  =()=>{
    score += 10;
    scoreBox.innerText = score;
}

let play = ()=>{
    botm.addEventListener("click",(dets)=>{
        if(dets.target.innerText == hitCheck ){
            addScore(); 
            newHit();
            botm.innerHTML = ``
            makeBubble();
        }
        
     })
}

let restartFn = ()=>{
    botm.addEventListener("click",(dets)=>{
        if(dets.target.innerText == "Restart" ){
             botm.innerHTML = ``
            makeBubble();
            timeStart();
            newHit();
            score = 0;
        }
     })
}


restartFn();
newHit();
play();
timeStart();
makeBubble();

