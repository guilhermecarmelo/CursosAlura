function adicionapokemon(pokemon){

var xhr = new XMLHttpRequest();
console.log("alo");
xhr.open("GET", pokemon.url);

xhr.addEventListener("load", function () {
    if (xhr.status == 200) {
        var resposta = xhr.responseText;
        var Pokemons = JSON.parse(resposta);
       console.log(pokemon.url)
    } else {
        alert("Ocorreu um erro inesperado, contate o suporte!")
    }
});

xhr.send();

}