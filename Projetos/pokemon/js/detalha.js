var lista = document.querySelector(".listaprojetos");

lista.addEventListener("click", function (event) {

    var lastexpande = document.querySelector(".expande");
    var htmlold = ""
    if (lastexpande != null) {
        lastexpande.classList.remove("expande");        
        detail = lastexpande.querySelector(".detail");
        detail.classList.add("hide");
        htmlold = lastexpande.innerHTML;
    }
    console.log(htmlold);
    console.log(event.target.closest("li").innerHTML);
    if (htmlold != event.target.closest("li").innerHTML) {        
        event.target.closest("li").classList.add("expande");
        detail = event.target.closest("li").querySelector(".detail");
        detail.classList.remove("hide");
    }


})