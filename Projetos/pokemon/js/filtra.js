var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input",function(){
    var item = document.querySelectorAll("li");
    item.forEach(checkitem) 
})

function checkitem(item){ 

    var nome = item.querySelector(".NomePoke").innerHTML;

    var codigo = item.querySelector(".CodigoPoke").innerHTML;
  
    var filtro = document.querySelector("#filtrar-tabela").value;

    var expressao = new RegExp(filtro,"i")
 
    console.log(expressao.test(codigo));
    console.log(expressao.test(nome));   
    console.log((filtro.length = 0));
    console.log("");

    if(      (expressao.test(nome)) ||(expressao.test(codigo)) || (filtro.length = 0)) {        
       item.classList.remove("hide") 
    } else{
        item.classList.add("hide")   
    }
}