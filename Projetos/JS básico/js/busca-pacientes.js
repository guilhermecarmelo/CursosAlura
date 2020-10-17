var botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){

    var xhr = new XMLHttpRequest();
console.log("alo");
    xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes");
    
    xhr.addEventListener("load",function(){
        if(xhr.status == 200){
        var resposta = xhr.responseText;
        var pacientes = JSON.parse(resposta);         

        pacientes.forEach(function(paciente) {           
            adicionaPacienteTabela(paciente)            
        });
    }else{    
        alert("Ocorreu um erro inesperado, contate o suporte!")
    }});   


    xhr.send();    

});

