


var xhr = new XMLHttpRequest();
console.log("alo");
xhr.open("GET", "https:\\pokeapi.co/api/v2/pokemon/?offset=0&limit=649");

xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var Pokemons = JSON.parse(resposta);

        Pokemons.forEach(function (pokemon) {
            adicionaPokemon(pokemon)
        });
    } else {
        alert("Ocorreu um erro inesperado, contate o suporte1!")
    }
});


xhr.send();

