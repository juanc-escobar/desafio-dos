// Declaracion de variables

let posionHeroe = 2;
let danoHeroe = 200;
let vidaHeroe = 1000;
let vidaEnemigo = 2000;
let danoEnemigo = 200
let estadoCombate = true

// Instrucciones

alert ("🎊Bienvenido(a)🎊 al simulador de combate magico, te presentamos las instrucciones para utilizar esta herramienta: \n\n1. Selecciona un enemigo, los enemigos tienen un elemento natural por lo cual tendran fortalezas y debilidades contra ciertos elementos, tu mision es descubrirlas. \n\n2. la pantalla de estatus te indicara cuanto tienes de vida , cual es la vida del enemigo y la cantidad de posiones de vida disponibles. \n\n3. La pantalla de accion te indicara 3 acciones, atacar, beber posion o huir, las posiones te suman 200 de vida, huir termina el combate. \n\n4. tienes cuatro elementos para atacar a tu enemigo, descubre su debilidad. \n\n5. Si desas volver a jugar actualiza la pagina. \n\nBuena suerte 👍")

// Variable para selecionar tu oponente

let elementoEnemigo = parseInt(prompt("Seleciciona tu contrincante: \n1. Slime de fuego 🔥 \n2. serpiente de agua 💧 \n3. Escorpion de arena 🗻 \n4. Alcon de viento 💨"))

// Funcion para mostrar en pantalla el estado de los jugadores

function estadoActual() {
    alert("ESTADO ACTUAL" + "\n" + "\n💗Vida del heroe: " + vidaHeroe + "\n🖤 Vida del enemigo: " + vidaEnemigo + " " + "\n🍺 Cantidad de posiones: " + posionHeroe)
}

// Funcion para recuperar vida con una posion

function beberPosion() {
    if (vidaHeroe < 1000 && posionHeroe > 0) {
        posionHeroe = posionHeroe - 1
        vidaHeroe = vidaHeroe + 200
    } else if  (vidaHeroe >= 1000) {
        alert ("Tu vida esta al 100  💗")

    } else if  (posionHeroe <= 0) {
        alert ("No te quedan posiones 🍺")
    }
}

// Funcion para atacar al enemigo

function trunoDeAtaqueHeroe(elemento) {
    if (elemento === elementoEnemigo) {
        vidaEnemigo = vidaEnemigo - (danoHeroe /2)
        alert ("Usaste el mismo elemento que el enemigo \nNo es efectivo ❌")
    }  else if (elemento === 1 && elementoEnemigo === 3) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste LLamarada 🔥🔥🔥🔥🔥 \nEs super efectivo ✨")
    } else if (elemento === 2 && elementoEnemigo === 1) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Pistola de agua 💧💧💧💧💧 \nEs super efectivo ✨")
    } else if (elemento === 3 && elementoEnemigo === 4) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Bomba de arena 🗻🗻🗻🗻🗻 \nEs super efectivo ✨")
    } else if (elemento === 4 && elementoEnemigo === 2) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Corte de viento 💨💨💨💨💨 \nEs super efectivo ✨")
    } else {
        vidaEnemigo = vidaEnemigo - danoHeroe
        alert ("tu ataque surtio efecto \nBusca su debilidad ❓")
    }
}

// Funcion de ataque del enemigo

function turnodeAtaqueEnemigo() {
    vidaHeroe = vidaHeroe - danoEnemigo
    alert ("Recibiste dano enemigo 💥💥💥💥💥 \nCuida tu salud 💔")
}

// Ciclo de combate

while (estadoCombate === true)    {

    estadoActual()

    let seleccionHeroe = parseInt(prompt("Seleciciona tu accion: \n1. Atacar 🧨 \n2. Beber posion 🍺 \n3. huir 🏃‍♂️"))

    if (seleccionHeroe === 1) {
        let tipoDeAtaqueHeroe = parseInt(prompt("Seleciciona tu tipo de ataque: \n1. Llamarada 🔥 \n2.Pistola de agua 💧 \n3. bomba de arena 🗻 \n4. corte de viento 💨"))
        trunoDeAtaqueHeroe(tipoDeAtaqueHeroe)
        turnodeAtaqueEnemigo()
    } else if (seleccionHeroe === 2) {
        beberPosion()
    } else if (seleccionHeroe === 3) {
        alert("Has huido del combate 🏃‍♂️💨")
        break
    } else {
        let seleccionHeroe = parseInt(prompt("Seleciciona una accion valida: \n1. Atacar 🧨 \n2. Beber posion 🍺 \n3. huir 🏃‍♂️"))
        continue      
    }   

    if (vidaHeroe > 0 && vidaEnemigo <= 0) {
        alert("🎉Felicidades has ganado el combate🎉")
        estadoCombate = false
    } else if (vidaHeroe <= 0 && vidaEnemigo > 0) {
        alert("Lo siento has perdido, puedes volver a intentarlo 🎭")
        estadoCombate = false
    } else if (vidaHeroe <= 0 && vidaEnemigo <= 0) {
        alert("Casi lo logras ha sido un empate, puedes volver a intentarlo 🦥")
        estadoCombate = false
    }
}


