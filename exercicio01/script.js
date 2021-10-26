function comeco(){
    var data = new Date()
    var hora = data.getHours()
    var msg = document.getElementById("msg")
    var img = document.getElementById("imagem")
    msg.innerHTML = `Now it's ${hora} o'clock. `
    if(hora >= 0 && hora <12){
        img.src = "manha.jpg"
        document.body.style.background = "#e2cd9f"
    } else if(hora >= 12 && hora < 20){
        img.src = "tarde.jpg"
        document.body.style.background = "#b9846f"
    } else {
        img.src = "noite.jpg"
        document.body.style.background = "#515154"
    }

}