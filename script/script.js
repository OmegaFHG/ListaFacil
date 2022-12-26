async function carregardados() {

const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e"
const resposta = await fetch(url)
const json = await resposta.json()
const dados = json.results
dados.forEach(serie => document.querySelector("#series").appendChild(Card(serie)))
}

carregardados()