var txtv = document.getElementById('txtvel')
var res = document.getElementById('res')

function calcular() {
    var vel = Number(txtv.value)
    res.innerHTML = `Sua velocidade atual é de ${vel}km/h`

    if (vel > 60 || vel < 10) {
        res.innerHTML += `<p>Sua velocidade está fora do aceitável. <strong>MULTADO!</strong> </p>`
    }
    res.innerHTML += `<p>Dirija sempre com cinto de segurança</p>`
}