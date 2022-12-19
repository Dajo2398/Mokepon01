let ataqueJugador
let ataqueEnemigo
let resultadoBatalla
let VidasJugador = 3
let VidasEnemigo = 3


function iniciarJuego()  {
    let botonMascota = document.getElementById('boton-mascota')
    botonMascota.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
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

    let mascotaAleatoria = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-del-enemigo')
    
   
    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }else if (mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }else {spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }
 
}

function aleatorio(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}   

function ataqueFuego(){
    ataqueJugador = 'FUEGO'
    ataqueAleatorioEnemigo()
    

}

function ataqueAgua(){
    ataqueJugador = 'AGUA'
    ataqueAleatorioEnemigo()
}

function ataqueTierra(){
    ataqueJugador = 'TIERRA'
    ataqueAleatorioEnemigo()
    
}

function ataqueAleatorioEnemigo(){
    ataqueAleatorio = aleatorio(1,3)

    if (ataqueAleatorio == 1 ){
        ataqueEnemigo = 'FUEGO'
    }else if (ataqueAleatorio == 2){
        ataqueEnemigo = 'AGUA'
    }else {ataqueEnemigo = 'TIERRA'}

    batalla ()
    crearMensaje ()
    


}


function crearMensaje (){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = 'Tu mascota atacó con ' +ataqueJugador+ ' ,la mascota del enemigo atacó con '+ataqueEnemigo+ ' -' +resultadoBatalla+ '...'

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultado){
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    
    parrafo.innerHTML = resultado

    sectionMensajes.appendChild(parrafo)
}

function batalla (){
    let spanVidasJugadador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')


    
    if(ataqueJugador === ataqueEnemigo){

        resultadoBatalla = 'EMPATE'

    }else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO' || ataqueJugador === 'FUEGO' && ataqueJugador === 'TIERRA' || ataqueJugador === 'TIERRA' && ataqueJugador === 'AGUA'){

        resultadoBatalla = 'GANASTE'   
        VidasEnemigo --
        spanVidasEnemigo.innerHTML = VidasEnemigo
        

    }else {
        resultadoBatalla ='PERDISTE'
        VidasJugador --
        spanVidasJugadador.innerHTML = VidasJugador
        
        
    }
    
}

/* function revisarVidas() {
    if (VidasEnemigo === 0 ){
        crearMensajeFinal('Felicitaciones ganaste!! :) ')

    }else if (VidasJugador === 0){

     crearMensajeFinal('Lo sentimos, perdiste :c')      
    }
    
     
}*/
window.addEventListener('load', iniciarJuego)