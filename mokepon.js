const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciarJuego = document.getElementById('reiniciar')
const botonSeleccionar = document.getElementById('boton-seleccionar')
const botonFuego = document.getElementById('boton-fuego')
const botonAgua = document.getElementById('boton-agua')
const botonTierra = document.getElementById('boton-tierra')
const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')


const spanMascotaEnemigo = document.getElementById('mascota-del-enemigo')

const spanVidasJugadador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const sectionAtaquesDelJugador = document.getElementById('ataques-del-jugador')
const sectionAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const sectionMensajeFinal = document.getElementById("resultado")
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')

let mokepones = []
let ataqueJugador
let ataqueEnemigo
let opcionDeMokepones
let inputHip 
let inputCapi 
let inputRati 
let VidasJugador = 3
let VidasEnemigo = 3

class Mokepon {
    constructor(nombre,foto,vida,){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
    }
}

let hipodoge = new Mokepon ('Hipodoge','./Assets/mokepons_mokepon_hipodoge_attack.png',5)
let capipepo = new Mokepon ('Capipepo','./Assets/mokepons_mokepon_capipepo_attack.png',5)
let ratigueya = new Mokepon ('Ratigueya','./Assets/mokepons_mokepon_ratigueya_attack.png',5)

hipodoge.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)
capipepo.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    
)
ratigueya.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
)

mokepones.push(hipodoge,capipepo,ratigueya)



function iniciarJuego()  {
    sectionSeleccionarAtaque.style.display = 'none'
    sectionReiniciarJuego.style.display = 'none'    
    botonFuego.addEventListener('click',ataqueFuego)
    botonAgua.addEventListener('click',ataqueAgua)
    botonTierra.addEventListener('click',ataqueTierra)
    botonReiniciar.addEventListener('click',reiniciarJuego)
    botonSeleccionar.addEventListener('click',validarSeleccion)

    mokepones.forEach((Mokepon) => {  
        opcionDeMokepones = `
        <input type="radio"   id=${Mokepon.nombre} name="mascota" /> 
        <label class="tarjeta-de-mokepon" for=${Mokepon.nombre} >
          <p>${Mokepon.nombre}</p>
          <img src=${Mokepon.foto} alt=${Mokepon.nombre}>
        </label>
        `
        contenedorTarjetas.innerHTML  += opcionDeMokepones

        inputHip = document.getElementById('Hipodoge')
        inputCapi = document.getElementById('Capipepo')
        inputRati = document.getElementById('Ratigueya')

    })
}

function validarSeleccion() {
    if (inputCapi.checked || inputHip.checked || inputRati.checked){
        seleccionarMascotaJugador()
    }else {alert("Debes seleccionar un personaje")}
}    

function seleccionarMascotaJugador() {
    
    sectionSeleccionarAtaque.style.display = 'flex'    
    sectionReiniciarJuego.style.display = 'none'    
    sectionSeleccionMascota.style.display = 'none'
  
    if (inputHip.checked){ 
        alert("Seleccionaste "+inputHip.id)
        spanMascotaJugador.innerHTML = inputHip.id
    }else if ( inputCapi.checked) {
        alert("Seleccionaste "+inputCapi.id)
        spanMascotaJugador.innerHTML = inputCapi.id
    }else if ( inputRati.checked) {
        alert("Seleccionaste "+ inputRati.id)
        spanMascotaJugador.innerHTML = inputRati.id
    }
 seleccionarMascotaEnemigo ()  
}   
    
function seleccionarMascotaEnemigo(){ 

    let mascotaAleatoria = aleatorio(1,3)

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

function batalla (){
        
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

function crearMensaje (resultado){

    let ParrafoAtaqueDelJugador = document.createElement('p')
    let ParrafoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    ParrafoAtaqueDelJugador.innerHTML = ataqueJugador
    ParrafoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
  
    sectionAtaquesDelJugador.appendChild(ParrafoAtaqueDelJugador)
    sectionAtaquesDelEnemigo.appendChild(ParrafoAtaqueDelEnemigo)
}
function revisarVidas(){

    if (VidasEnemigo === 0 ) {
        crearMensajeFinal('Felicitaciones, ganaste!!!')
    }else if (VidasJugador === 0){
     crearMensajeFinal('Lo siento, perdiste')}
}

function crearMensajeFinal(resultadoFinal){

    sectionMensajeFinal.innerHTML =  resultadoFinal

   botonFuego.disabled = true
   botonAgua.disabled = true
   botonTierra.disabled = true 

   sectionReiniciarJuego.style.display = 'block'
}
     
function reiniciarJuego(){ 
    location.reload()
    

    

}
window.addEventListener('load', iniciarJuego)


