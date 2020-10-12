var filtro = document.querySelector("#filtrar-tabela");

filtro.addEventListener("input",function(){
    var pacientes = document.querySelectorAll(".paciente");
    pacientes.forEach(checkpacientes) 
})

function checkpacientes(item){ 

    var tdnome = item.querySelector(".info-nome");

    var nome = tdnome.textContent;
    var filtro = document.querySelector("#filtrar-tabela").value;

    var expressao = new RegExp(filtro,"i")
 

    if((expressao.test(nome)) || (filtro.length = 0)){
       item.classList.remove("hide") 
    } else{
        item.classList.add("hide")   
    }
}