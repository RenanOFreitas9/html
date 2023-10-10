var a = document.getElementById("area");
a.addEventListener("click", actClick)
a.addEventListener("mouseenter", entrar)
a.addEventListener("mouseout", sair)

function actClick(){
    
    a.style.backgroundColor = 'blue'
    a.innerText = "Clicou"
    a.style.fontSize = '3em'
    a.style.borderRadius = '50%'
    a.style.transition ='5s'
}

function entrar(){
    a.innerText = "ENTROU"    
}

function sair(){
    a.innerText ="SAIU"
}