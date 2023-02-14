const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciarJuego = document.getElementById('reiniciar')
const botonSeleccionar = document.getElementById('boton-seleccionar')
const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')


const spanMascotaEnemigo = document.getElementById('mascota-del-enemigo')

const spanVidasJugadador = document.getElementById('vidas-jugador')
const spanvidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const sectionAtaquesDelJugador = document.getElementById('ataques-del-jugador')
const sectionAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const sectionMensajeFinal = document.getElementById("resultado")
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorBotonesAtaque = document.getElementById("botones-ataque")

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHip 
let inputCapi 
let inputRati 
let mascotaJugador 
let ataquesEnemigo = []
let botonFuego = []
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasEnemigo = 0
let victoriasJugador = 0
let vidasJugador = 3
let vidasEnemigo = 3


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
        mascotaJugador = inputHip.id
    }else if ( inputCapi.checked) {
        alert("Seleccionaste "+inputCapi.id)
        spanMascotaJugador.innerHTML = inputCapi.id
        mascotaJugador = inputCapi.id
    }else if ( inputRati.checked) {
        alert("Seleccionaste "+ inputRati.id)
        spanMascotaJugador.innerHTML = inputRati.id
        mascotaJugador = inputRati.id
    }
    extraerAtaques(mascotaJugador)
    seleccionarMascotaEnemigo ()  
}  

function extraerAtaques(mascotaJugador){
    let ataques
    for (let i = 0; i < mokepones.length; i++) {
        if (mascotaJugador === mokepones[i].nombre){
         ataques = mokepones[i].ataques} 
    }
    mostrarAtaques(ataques)
}  

function mostrarAtaques(ataques){
    ataques.forEach((ataque) => {
       ataquesMokepon = `
       <button id=${ataque.id} class="botones-ataque" >${ataque.nombre}</button>
     `
     contenedorBotonesAtaque.innerHTML += ataquesMokepon
     
     botonFuego = document.getElementById('boton-fuego')
     botonAgua = document.getElementById('boton-agua')
     botonTierra = document.getElementById('boton-tierra')
     botones = document.querySelectorAll('.botones-ataque')
     
    })
}

function secuenciaAtaque(){

    botones.forEach((boton) =>{
        boton.addEventListener('click',(e) =>{
            if ( e.target.textContent === '🔥'){
                ataqueJugador.push('🔥') 
                console.log(ataqueJugador)    
                boton.style.background = '#7f0fa1'  
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('💧')
                console.log(ataqueJugador)    
                boton.style.background = '#7f0fa1' 
            }else {
                ataqueJugador.push('🌱')
                console.log(ataqueJugador)    
                boton.style.background = '#7f0fa1'
            } 
            ataqueAleatorioEnemigo()  
        })
        
    })
}

function seleccionarMascotaEnemigo(){ 

    let mascotaAleatoria = aleatorio(0,mokepones.length-1)
    spanMascotaEnemigo.innerHTML = mokepones[mascotaAleatoria].nombre
    ataquesEnemigo = mokepones[mascotaAleatoria].ataques
    secuenciaAtaque()
           
}

function aleatorio(min,max){
return Math.floor(Math.random()*(max-min+1)+min)
}   
 


function ataqueAleatorioEnemigo(){
    
    ataqueAleatorio = aleatorio(0,ataquesEnemigo.length -1) 
    
    ataqueEnemigo.push(ataquesEnemigo[ataqueAleatorio].nombre)
    ataquesEnemigo.splice(ataqueAleatorio,1)
    console.log(ataqueEnemigo) 

    
    IniciarBatalla()
}

function IniciarBatalla() { 
    if (ataqueJugador.length === 5  ){
        batalla()
        
    }
}

function indexAmbosOponentes(jugador,enemigo){
    indexAtaqueJugador = ataqueJugador[jugador]
    indexAtaqueEnemigo = ataqueEnemigo[enemigo]
}

function batalla (){
        
    for (let i = 0; i < ataqueJugador.length; i++) {
        if(ataqueJugador[i] === ataqueEnemigo[i]){
            crearMensaje("EMPATE")
            indexAmbosOponentes(i,i)          
        }if (ataqueJugador[i] === '💧' && ataqueEnemigo[i] === '🔥' || ataqueJugador[i] === '🌱' && ataqueEnemigo[i] === '💧' || ataqueJugador[i] === '🔥' && ataqueEnemigo[i] === '🌱' ){
            crearMensaje("GANASTE")
            indexAmbosOponentes(i,i)
            victoriasJugador++
            spanVidasJugadador.innerHTML = victoriasJugador
        }else {
            crearMensaje("PERDISTE")
            indexAmbosOponentes(i,i)
            victoriasEnemigo++ 
            spanvidasEnemigo.innerHTML = victoriasEnemigo
        }
    }
    revisarVidas()      
}    


function crearMensaje (resultado){

    let ParrafoAtaqueDelJugador = document.createElement('p')
    let ParrafoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    ParrafoAtaqueDelJugador.innerHTML = indexAtaqueJugador  
    ParrafoAtaqueDelEnemigo.innerHTML = indexAtaqueEnemigo
  
    sectionAtaquesDelJugador.appendChild(ParrafoAtaqueDelJugador)
    sectionAtaquesDelEnemigo.appendChild(ParrafoAtaqueDelEnemigo)
}
function revisarVidas(){

    if (victoriasJugador > victoriasEnemigo ) {
        crearMensajeFinal('Felicitaciones, ganaste!!!')
    }else if (victoriasJugador < victoriasEnemigo){
     crearMensajeFinal('Lo siento, perdiste')
    }else if (victoriasJugador === victoriasEnemigo){
        crearMensajeFinal('Esto fue un empate')
    }    

}

function crearMensajeFinal(resultadoFinal){

    sectionMensajeFinal.innerHTML =  resultadoFinal

    botones.forEach((boton) =>{
        boton.disabled = true
    })

   sectionReiniciarJuego.style.display = 'block'
}
     
function reiniciarJuego(){ 
    location.reload()  

}
window.addEventListener('load', iniciarJuego)


