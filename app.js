document.addEventListener("DOMContentLoaded", () =>{



function randomQuotes(){
    quoteBtn.classList.add("loading");
    quoteBtn.innerText= "Loading Quote"
    fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(result => {
    console.log(result);
        let quoteText = document.querySelector(".quote")
        let authorName = document.querySelector(".author .name")
    
        quoteText.innerText = result.content
        authorName.innerText = result.author
        quoteBtn.innerText ="New quote"
        quoteBtn.classList.remove("loading");
        
    }); 
}

let quoteBtn = document.querySelector("button") 
quoteBtn.addEventListener("click",randomQuotes())
}
)

let quoteBtn = document.querySelector("button") 
quoteBtn.addEventListener("click",() => location.reload())
