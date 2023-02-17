const sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
const sectionReiniciarJuego = document.getElementById('reiniciar')
const botonSeleccionar = document.getElementById('boton-seleccionar')
const botonReiniciar = document.getElementById('boton-reiniciar')


const sectionSeleccionMascota = document.getElementById('seleccionar-mascota')
const spanMascotaJugador = document.getElementById('mascota-jugador')
const spanMascotaEnemigo = document.getElementById('mascota-del-enemigo')

const spanVidasJugador = document.getElementById('vidas-jugador')
const spanVidasEnemigo = document.getElementById('vidas-enemigo')

const sectionMensajes = document.getElementById('resultado')
const sectionAtaquesDelJugador = document.getElementById('ataques-del-jugador')
const sectionAtaquesDelEnemigo = document.getElementById('ataques-del-enemigo')

const sectionMensajeFinal = document.getElementById('resultado')
const contenedorTarjetas = document.getElementById('contenedor-tarjetas')
const contenedorBotonesAtaque = document.getElementById('botones-ataque')

const sectionVerMapa = document.getElementById('ver-mapa')
const mapa = document.getElementById('mapa')

sectionSeleccionarAtaque.style.display = 'none'
sectionReiniciarJuego.style.display = 'none'
sectionVerMapa.style.display = 'none'

let mokepones = []
let ataqueJugador = []
let ataqueEnemigo = []
let opcionDeMokepones
let inputHip 
let inputCapi 
let inputRati 
let inputLang
let inputPydos
let inputTuca
let mascotaJugador 
let ataquesMokepon
let ataquesEnemigo
let botonFuego
let botonAgua
let botonTierra
let botones = []
let indexAtaqueJugador
let indexAtaqueEnemigo
let victoriasEnemigo = 0
let victoriasJugador = 0
let vidasJugador = 3
let vidasEnemigo = 3
let lienzo = mapa.getContext("2d")

class Mokepon {
    constructor(nombre,foto,vida,tipo){
        this.nombre = nombre
        this.foto = foto
        this.vida = vida 
        this.ataques = []
        this.tipo = tipo
        this.x = 20
        this.y = 30
        this.ancho = 80
        this. alto = 80
        this.mapaFoto = new Image ()
        this.mapaFoto.src = foto
        this.velocidadX = 0
        this.velocidadY
    }
}


let hipodoge = new Mokepon ('Hipodoge','./Assets/mokepons_mokepon_hipodoge_attack.png',5,'AGUA')
let capipepo = new Mokepon ('Capipepo','./Assets/mokepons_mokepon_capipepo_attack.png',5,'TIERRA')
let ratigueya = new Mokepon ('Ratigueya','./Assets/mokepons_mokepon_ratigueya_attack.png',5,'FUEGO')
let langostelvis = new Mokepon ('Langostelvis','./Assets/mokepons_mokepon_langostelvis_attack.png',5,'FUEGO')
let pydos =  new Mokepon ('Pydos','./Assets/mokepons_mokepon_tucapalma_attack.png',5,'AGUA')
let tucapalma = new Mokepon ('Tucapalma','./Assets/mokepons_mokepon_pydos_attack.png',5,'TIERRA')

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
langostelvis.ataques.push(
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🌱', id: 'boton-tierra'},
)
pydos.ataques.push(
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '🌱', id: 'boton-tierra'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
)    
tucapalma.ataques.push(
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '💧', id: 'boton-agua'},
    { nombre: '🔥', id: 'boton-fuego'},
    { nombre: '🌱', id: 'boton-tierra'},
)
mokepones.push(hipodoge,capipepo,ratigueya,langostelvis,pydos,tucapalma)


function iniciarJuego()  {
    
      
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
        inputLang = document.getElementById('Langostelvis') 
        inputPydos = document.getElementById('Pydos') 
        inputTuca = document.getElementById('Tucapalma')
    })
}

function validarSeleccion() {
    if (inputCapi.checked || inputHip.checked || inputRati.checked || inputLang.checked || inputPydos.checked || inputTuca.checked ){
        seleccionarMascotaJugador() 
    }else {alert("Debes seleccionar un personaje")}
}    

function seleccionarMascotaJugador() {
    
    // sectionSeleccionarAtaque.style.display = 'flex'    
    sectionVerMapa.style.display = 'flex'    
    sectionSeleccionMascota.style.display = 'none'  
  
    if (inputHip.checked){ 
        alert("Seleccionaste "+ inputHip.id)
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
    }else if (inputLang.checked){
        alert("Seleccionaste "+ inputLang.id)
        spanMascotaJugador.innerHTML = inputLang.id
        mascotaJugador = inputLang.id
    }else if (inputPydos.checked){
        alert("Seleccionaste "+ inputPydos.id)
        spanMascotaJugador.innerHTML = inputPydos.id
        mascotaJugador = inputPydos.id
    }else if (inputTuca.checked){
        alert("Seleccionaste "+ inputTuca.id)
        spanMascotaJugador.innerHTML = inputTuca.id
        mascotaJugador = inputTuca.id
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
                boton.disabled = true  
            }else if (e.target.textContent === '💧'){
                ataqueJugador.push('💧')
                console.log(ataqueJugador)    
                boton.disabled = true
            }else {
                ataqueJugador.push('🌱')
                console.log(ataqueJugador)    
                boton.disabled = true
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


function batalla() {
    
    for (let index = 0; index < ataqueJugador.length; index++) {
        if(ataqueJugador[index] === ataqueEnemigo[index]) {
            indexAmbosOponentes(index, index)
            crearMensaje()
            let resultado = 'empate'
            console.log(resultado)
        } else if ((ataqueJugador[index] === '🔥' && ataqueEnemigo[index] === '🌱') || (ataqueJugador[index] ==='💧' && ataqueEnemigo[index] === '🔥') || (ataqueJugador[index] === '🌱' && ataqueEnemigo[index] === '💧') ) {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasJugador++
            spanVidasJugador.innerHTML = victoriasJugador
            let resultado = 'victoria'
            console.log(resultado)
        } else {
            indexAmbosOponentes(index, index)
            crearMensaje()
            victoriasEnemigo++
            spanVidasEnemigo.innerHTML = victoriasEnemigo
            let resultado = 'derrota'
            console.log(resultado)
        }
    }

    revisarVidas()
}

function crearMensaje (){

    let ParrafoAtaqueDelJugador = document.createElement('p')
    let ParrafoAtaqueDelEnemigo = document.createElement('p')
    
    
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

    sectionReiniciarJuego.style.display = 'block'
}
     
function reiniciarJuego(){ 
    location.reload()  

}
window.addEventListener('load', iniciarJuego)


function pintarPersonaje() {
    lienzo.clearRect(0, 0, mapa.width, mapa.height)
    lienzo.drawImage(
        capipepo.mapaFoto,
        capipepo.x,
        capipepo.y,
        capipepo.ancho,
        capipepo.alto
    )
}

function moverCapipepoDer() {
    capipepo.x = capipepo.x + 5
    pintarPersonaje()
}

function moverCapipepoUp() {
    capipepo.y = capipepo.y - 5
    pintarPersonaje()
}
function moverCapipepoIzq() {
    capipepo.x = capipepo.x - 5
    pintarPersonaje()
}

function moverCapipepoDown() {
    capipepo.y = capipepo.y + 5
    pintarPersonaje()
}



window.addEventListener('load', iniciarJuego)