const btn = document.getElementById("btn")
// const outPut = document.getElementById("output")
let quote = document.getElementById("word")
let author = document.getElementById("name")


fetch('http://api.quotable.io/random')
    .then(response => response.json())
    .then(quote => getQuote(quote))

     
 function getQuote(data){
     quote.innerText = data.content
    author.innerHTML = data.author
    // let animeQuote = document.createElement("li")
    // animeQuote.className = "quotesGenerated"
    // animeQuote.innerHTML =`
    //   <div class="quotesGenerated">
    //             <h3> ${data.author}</h3>
	// 			<p>${data.content}</p>
			

    // </div>
    // `;
    // outPut.appendChild(animeQuote)
    // console.log(data)
}


  btn.addEventListener("click", getQuote);