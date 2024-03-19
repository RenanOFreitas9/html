
var btn = document.getElementById('btn')

function calcular(){
    var peso = parseFloat(document.getElementById('peso').value);
    var alt = parseFloat(document.getElementById('alt').value);
    var result = document.getElementById('imc');
    var imc = peso / (alt*alt);
    result.innerHTML = `O IMC é ${imc}`

    if (imc < 18.5) {
        result.innerHTML += '<br>Abaixo do peso ideal';
    } else if (imc >= 18.5 && imc < 24.9) {
        result.innerHTML += '<br>Peso ideal';
    } else {
        result.innerHTML += '<br>Acima do peso ideal';
    }{
        
    }
}