 function iniciarJuego()  {
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click',seleccionarMascotaJugador)
}

function seleccionarMascotaJugador() {
    let inputHip = document.getElementById('Hipodoge').checked
    let inputCapi = document.getElementById('Capipepo').checked
    let inputRati = document.getElementById('Ratigueya').checked
    let spanMascotaJugador = document.getElementById('mascota-jugador')

    if (inputHip){ 
        alert("Seleccionaste Hipodoge")
        spanMascotaJugador.innerHTML = 'Hipodoge'
    }else if ( inputCapi) {
        alert("Seleccionaste Capipepo")
        spanMascotaJugador.innerHTML = 'Capipepo'
    }else if ( inputRati) {
        alert("Seleccionaste Ratigueya")
        spanMascotaJugador.innerHTML = 'Ratigueya'
    }else {alert("Debes seleccionar un personaje")
        }
  
 
   seleccionarMascotaEnemigo ()
   
}   
    
function seleccionarMascotaEnemigo(){ 

    let ataqueAleatorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-del-enemigo')
    
   
    if (ataqueAleatorio == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (ataqueAleatorio == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else {spanMascotaEnemigo.innerHTML = 'Ratigueyass'
    }

     


}

function aleatorio(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}   

window.addEventListener('load', iniciarJuego)