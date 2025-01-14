let boxs = document.querySelectorAll(".box");
let h2 = document.querySelector("h2");
let container = document.querySelector(".container");
let reset = document.querySelector("#reset")

Xtrue = true;

WinnerPattern =[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]


const checkWinner = ()=> {
    for (let pattern of WinnerPattern){
      if(boxs[pattern[0]].innerText != "" && boxs[pattern[1]].innerText != ""){
         if(boxs[pattern[0]].innerText === boxs[pattern[1]].innerText && boxs[pattern[1]].innerText === boxs[pattern[2]].innerText){
             if(Xtrue){
                h2.classList.remove("hide");  
                h2.innerText = "Winner is O"
             }else{
                h2.innerText = "Winner is X"
             }
 
             for (box of boxs){
                 h2.classList.remove("hide");  
                 box.disabled =true;
             }

             container.classList.add("hide");
             reset.innerHTML = " <button id='reset'>New</button>" 
          }
      }
    }


};


boxs.forEach((box) =>{
    box.addEventListener("click",()=>{ 

        if(Xtrue){
            box.innerText = "X"
            box.style.color = "#61A0AF";
            Xtrue = false
        }else{
            box.innerText = "O"
            box.style.color = "#C7A258";
            Xtrue = true;
        }
        box.disabled = true;

        checkWinner();
    })
})

reset.addEventListener("click",()=>{
    
    console.log("i")
    for (box of boxs){
        box.disabled = false;
        box.innerText = "";
    }

    h2.classList.add("hide");  
    container.classList.remove("hide");
    reset.innerText =  'reset'
})
