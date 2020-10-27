var modal = document.getElementById("myModal");
modal.style.display = "block";

var xhr = new XMLHttpRequest();
xhr.open("GET", "https:\\pokeapi.co/api/v2/pokemon/?offset=0&limit=649");

xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
       
        var resposta = xhr.responseText;
        var pokemons = JSON.parse(resposta);     
        
        pokemons.results.forEach(function (pokemon) {            
            adicionapokemon(pokemon)
        });
        modal.style.display = "none";        
    } else {
        alert("Ocorreu um erro inesperado, contate o suporte!")
        modal.style.display = "none";
    }
});


xhr.send();


