let searchBox = document.querySelector(".searchBox")
let card = document.querySelectorAll('.card')

searchBox.addEventListener('input',()=>{
    let searchValue = searchBox.value.toLowerCase();

    
    card.forEach((card)=>{
        let dataName = card.getAttribute("data-name").toLocaleLowerCase();
        if(dataName.includes(searchValue)){
            card.style.display = "block";
        }else{
            card.style.display = "none";
        }
    })


})

