function Card(serie){
    const urlimagem = "https://image.tmdb.org/t/p/w200/" + serie.poster_path

    var card = document.createElement("div")
    card.classList.add("cards")
    
    var poster = document.createElement("img")
    poster.src = urlimagem
    
    var titulo = document.createElement("p")
    titulo.innerHTML = serie.title
    
    var divNota = document.createElement("div")
    divNota.classList.add("nota")
    
    var icone = document.createElement("span")
    icone.classList.add("material-icons")
    icone.classList.add("estrela")
    icone.innerHTML = "star"
    
    var nota = document.createElement("span")
    nota.innerHTML = serie.vote_average.toFixed(1)
    
    var botao = document.createElement("a")
    botao.classList.add("botao")
    botao.innerHTML ="detalhes"
    
    divNota.appendChild(icone)
    divNota.appendChild(nota)
    
    card.appendChild(poster)
    card.appendChild(titulo)
    card.appendChild(divNota)
    card.appendChild(botao)
    
    return card
    
    }

    		


