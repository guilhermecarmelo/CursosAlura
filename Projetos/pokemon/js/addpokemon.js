function adicionapokemon(pokemon) {

    var xhr = new XMLHttpRequest();

    xhr.open("GET", pokemon.url, false);
    xhr.send();

    if (xhr.status == 200) {

        var resposta = xhr.responseText;
        var pokemondet = JSON.parse(resposta);

        var codigo = pokemondet.id;
        var nome = pokemondet.name;
        var peso = pokemondet.weight;
        var altura = pokemondet.height;
        var tipos = pokemondet.types;
        var tipo1 = tipos[0].type.name;

        if (tipos.length > 1) {
            var tipo2 = tipos[1].type.name;
        } else {
            var tipo2 = "";
        }


        //cria item da lista
        var li = document.createElement("li");

        var lcodigo = document.createElement("label");
        lcodigo.classList.add('CodigoPoke');   

        var txtmask = "000";
        var cCod = codigo.toString();
        
        var codtransform = txtmask.substring(0, txtmask.length - cCod.length) + codigo              
        lcodigo.textContent = codtransform;


        var lnome = document.createElement("label");
        lnome.classList.add('NomePoke');
        lnome.textContent = nome;


        var lpeso = document.createElement("label");
        lpeso.classList.add('PesoPoke');
        lpeso.textContent = "Peso: "+peso;

        var laltura = document.createElement("label");
        laltura.classList.add('AlturaPoke');
        laltura.textContent = "Altura: "+altura;

        var ltipo1 = document.createElement("label");        
        ltipo1.textContent = tipo1;

        var infoshow= document.createElement("div");
        infoshow.classList.add('InfoPoke');        


        infoshow.appendChild(lcodigo);
        infoshow.appendChild(lnome);                    

        var tiposshow = document.createElement("div");
        tiposshow.classList.add("tipos")
        

        var imagem1 = document.createElement("img");
        imagem1.src = "icons/types/"+ tipo1 + ".svg"
        imagem1.classList.add('icon')

        var divtipo1 = document.createElement("div");
        divtipo1.classList.add('TipoPoke');
        

        divtipo1.appendChild(imagem1); 
        divtipo1.appendChild(ltipo1);
        divtipo1.style.backgroundColor = (corTipoForte(tipo1))
        tiposshow.appendChild(divtipo1)


        if (tipo2 != "") {
            var ltipo2 = document.createElement("label");
            
            ltipo2.textContent = tipo2;

            var imagem2 = document.createElement("img");
            imagem2.src = "icons/types/"+ tipo2 + ".svg"
            imagem2.classList.add('icon')

            var divtipo2 = document.createElement("div");
            divtipo2.classList.add('TipoPoke');

            divtipo2.appendChild(imagem2); 
            divtipo2.appendChild(ltipo2);

            divtipo2.style.backgroundColor = (corTipoForte(tipo2))

            tiposshow.appendChild(divtipo2)

           


        }

        

        li.style.backgroundColor = (corTipo(tipo1))

        var imagem = document.createElement("img");
        imagem.src = "svg/"+ codigo + ".svg"
        imagem.classList.add('ImgPoke')
        li.appendChild(imagem); 
        li.appendChild(infoshow);
        li.appendChild(tiposshow);





        

        var detail = document.createElement("div");
        detail.classList.add("detail")
        detail.classList.add("hide")

        detail.appendChild(lpeso);
        detail.appendChild(laltura);   
        
        
        li.appendChild(detail)

        var lista = document.querySelector(".listaprojetos");
        lista.appendChild(li);


    }












}

function corTipo(tipo1) {
    switch (tipo1) {
        case 'normal': {

            return "#C6C6A7"
        }
        case 'fighting': {

            return "#D67873"
        }
        case 'flying': {

            return "#C6B7F5"
        }
        case 'poison': {

            return "#C183C1"
        }
        case 'ground': {

            return "#EBD69D"
        }
        case 'rock': {

            return "#D1C17D"
        }
        case 'bug': {

            return "#C6D16E"
        }
        case 'ghost': {

            return "#A292BC"
        }
        case 'steel': {

            return "#D1D1E0"
        }
        case 'fire': {

            return "#F5AC78"
        }
        case 'water': {

            return "#9DB7F5"
        }
        case 'grass': {

            return "#A7DB8D"
        }
        case 'electric': {

            return "#FAE078"
        }
        case 'psychic': {

            return "#FA92B2"
        }
        case 'ice': {

            return "#BCE6E6"
        }
        case 'dragon': {

            return "#A27DFA"
        }
        case 'dark': {

            return "#A27DFA"
        }
        case 'fairy': {

            return "#F4BDC9"
        }

    }
}


function corTipoForte(tipo1) {
    switch (tipo1) {
        case 'normal': {

            return "#A8A878"
        }
        case 'fighting': {

            return "#C03028"
        }
        case 'flying': {

            return "#A890F0"
        }
        case 'poison': {

            return "#A040A0"
        }
        case 'ground': {

            return "#E0C068"
        }
        case 'rock': {

            return "#B8A038"
        }
        case 'bug': {

            return "#A8B820"
        }
        case 'ghost': {

            return "#705898"
        }
        case 'steel': {

            return "#B8B8D0"
        }
        case 'fire': {

            return "#F08030"
        }
        case 'water': {

            return "#6890F0"
        }
        case 'grass': {

            return "#78C850"
        }
        case 'electric': {

            return "#F8D030"
        }
        case 'psychic': {

            return "#F85888"
        }
        case 'ice': {

            return "#98D8D8"
        }
        case 'dragon': {

            return "#7038F8"
        }
        case 'dark': {

            return "#705848"
        }
        case 'fairy': {

            return "#EE99AC"
        }

    }
}

