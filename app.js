// fetch api
const url = '//api.quotable.io/random'

fetch(url)
.then(Response => Response.json())
.then(data => console.log(data))
