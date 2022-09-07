let btn = document.getElementById("btnEnviar")
let Nombre = document.getElementById("Nombre")
let Apellido = document.getElementById("Apellido")
let Numero1 = document.getElementById("Numero1")
let Numero2 = document.getElementById("Numero2")
let Password1 = document.getElementById("Password1")
let Password2 = document.getElementById("Password2")
let ok01 = document.getElementById("ok01")
let ok02 = document.getElementById("ok02")
let ok03 = document.getElementById("ok03")
let ok04 = document.getElementById("ok04")
let ok05 = document.getElementById("ok05")
let ok06 = document.getElementById("ok06")
let ok07 = document.getElementById("ok07")

let checkbox1 = document.getElementById("checkbox1")
let checkbox2 = document.getElementById("checkbox2")
let checkbox3 = document.getElementById("checkbox3")
let checkbox4 = document.getElementById("checkbox4")
let checkbox5 = document.getElementById("checkbox5")
let checkbox6 = document.getElementById("checkbox6")
let checkbox7 = document.getElementById("checkbox7")



console.log(btn);
btn.addEventListener("click", (e) => {
    e.preventDefault()
    let cantidadcheckbox = 0
    if (Nombre.value.length > 0) {
        ok01.className = "circulo verde"
    } else {
        ok01.className = "circulo rojo"
    }

    if (Apellido.value.length > 0) {
        ok02.className = "circulo verde"
    } else {
        ok02.className = "circulo rojo"
    }

    if (Numero1.value.length > 0 && Numero2.value.length > 0) {
        ok03.className = "circulo verde"

    } else {
        ok03.className = "circulo rojo"
    }

    if (Numero1.value < Numero2.value) {
        ok04.className = "circulo verde"

    } else {
        ok04.className = "circulo rojo"

    }

    if (Password1.value.length >= 8 && Password1.value.length <= 24) {
        ok05.className = "circulo verde"
    } else {
        ok05.className = "circulo rojo"
    }

    if (Password1.value == Password2.value) {
        ok06.className = "circulo verde"
    } else {
        ok06.className = "circulo rojo"

    }

    if (checkbox1.checked) {
        cantidadcheckbox++

    }
    if (checkbox2.checked) {
        cantidadcheckbox++
    }
    if (checkbox3.checked) {
        cantidadcheckbox++

    }
    if (checkbox4.checked) {
        cantidadcheckbox++

    }
    if (checkbox5.checked) {
        cantidadcheckbox++

    }
    if (checkbox6.checked) {
        cantidadcheckbox++

    }
    if (checkbox7.checked) {
        cantidadcheckbox++

    }
    if (cantidadcheckbox > 2) {
        ok07.className = "circulo verde"
    } else {
        ok07.className = "circulo rojo"
    }


})