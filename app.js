const btn = document.getElementById("btn")
const outPut = document.getElementById("output")

document.addEventListener("DOMContentLoaded", function clickAction(){
fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(quote => getQuote(quote))

 function getQuote(data){
    let animeQuote = document.createElement("li")
    animeQuote.className = "quotesGenerated"
    animeQuote.innerHTML =`
      <div class="quotesGenerated">
                <h3> ${data.author}</h3>
				<p>${data.content}</p>
			

    </div>
    `;
    console.log(animeQuote)
    outPut.appendChild(animeQuote);
   
}

 btn.addEventListener("click",  getQuote()) 
})


// document.addEventListener("DOMContentLoaded",result(getQuote())) 