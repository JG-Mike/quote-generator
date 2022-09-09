const btn = document.querySelector("button")
let quote = document.getElementById("word")
let author = document.getElementById("name")


fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(quote => getQuote(quote))

    btn.innerHTML ="searching quote" 
 function getQuote(data){
     quote.innerText = data.content
    author.innerHTML = data.author
    btn.innerHTML ="new quote"
   
}


  btn.addEventListener("click", getQuote);