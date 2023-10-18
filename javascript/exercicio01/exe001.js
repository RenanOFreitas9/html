function carregar() {
    var msg = document.getElementById('msg')
    var foto = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 13) {
        img.src = 'manha.jpg'
        document.body.style.background = 'yellow'
    } else if (hora >= 13 && hora < 18) {
        img.src = 'tarde.jpg'
        document.body.style.background = '#7a3c0a'
    } else {
        img.src = 'noite.jpg'
        document.body.style.background = '#151546'
    }
}
