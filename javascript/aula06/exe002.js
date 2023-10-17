

function verif(){
    var nac = document.getElementById('nac').value
    var res = document.getElementById('res')

    if (nac = 'BRASIL') {
        res.innerHTML = `Você é brasileiro`
    } else{
        res.innerHTML = `Você é estrangeiro`
    }
}