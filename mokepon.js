let ataqueJugador
let ataqueEnemigo
let VidasJugador = 3
let VidasEnemigo = 3


function iniciarJuego()  {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'
    let sectionReiniciarJuego = document.getElementById('reiniciar')
    sectionReiniciarJuego.style.display = 'none'



    let botonSeleccionar = document.getElementById('boton-seleccionar')
    botonSeleccionar.addEventListener('click',validarSeleccion)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)
    let botonReiniciar = document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener('click',reiniciarJuego) 
}

function validarSeleccion() {

    let inputHip = document.getElementById('Hipodoge').checked
    let inputCapi = document.getElementById('Capipepo').checked
    let inputRati = document.getElementById('Ratigueya').checked

    if (inputCapi || inputHip || inputRati){
       
        seleccionarMascotaJugador()
    }else {alert("Debes seleccionar un personaje")}
}    

function seleccionarMascotaJugador() {

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'flex'
    let sectionReiniciarJuego = document.getElementById('reiniciar')
    sectionReiniciarJuego.style.display = 'none'
    let sectionSeleccionMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionMascota.style.display = 'none'


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
    
  
 
   seleccionarMascotaEnemigo ()
   
}
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
    
    


}


function crearMensaje (resultado){

    let sectionMensajes = document.getElementById('resultado')
    let sectionAtaquesDelJugador = document.getElementById('ataques-del-jugador')
    let sectionAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

    
    let ParrafoAtaqueDelJugador = document.createElement('p')
    let ParrafoAtaqueDelEnemigo = document.createElement('p')
    


    sectionMensajes.innerHTML = resultado
    ParrafoAtaqueDelJugador.innerHTML = ataqueJugador
    ParrafoAtaqueDelEnemigo.innerHTML = ataqueEnemigo

    

    
    sectionAtaquesDelJugador.appendChild(ParrafoAtaqueDelJugador)
    sectionAtaquesDelEnemigo.appendChild(ParrafoAtaqueDelEnemigo)


}



function batalla (){
    
    let spanVidasJugadador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    crearMensaje
    
    if(ataqueJugador === ataqueEnemigo){

        crearMensaje("EMPATE")

    }else if (ataqueJugador === 'AGUA' && ataqueEnemigo === 'FUEGO' || ataqueJugador === 'FUEGO' && ataqueJugador === 'TIERRA' || ataqueJugador === 'TIERRA' && ataqueJugador === 'AGUA'){

        crearMensaje("GANASTE") 
        VidasEnemigo --
        spanVidasEnemigo.innerHTML = VidasEnemigo
        

    }else {
        crearMensaje("PERDISTE")
        VidasJugador --
        spanVidasJugadador.innerHTML = VidasJugador
        
        
    }
     
     
    revisarVidas()
}
 
function revisarVidas(){

    if (VidasEnemigo === 0 ) {
        crearMensajeFinal('Felicitaciones, ganaste!!!')
        

    }else if (VidasJugador === 0){

        crearMensajeFinal('Lo siento, perdiste')
       
    }
}

function crearMensajeFinal(resultadoFinal){

    let sectionMensajeFinal = document.getElementById("resultado")
    
    sectionMensajeFinal.innerHTML =  resultadoFinal

    

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true 

    let sectionReiniciarJuego = document.getElementById('reiniciar')
    sectionReiniciarJuego.style.display = 'block'
        

}
     
function reiniciarJuego(){ 
    location.reload()
    

    

}
window.addEventListener('load', iniciarJuego)


