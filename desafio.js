// Declaracion de variables

let posionHeroe = 2;
let danoHeroe = 200;
let vidaHeroe = 1000;
let vidaEnemigo = 2000;
let danoEnemigo = 200
let estadoCombate = true

// Instrucciones

alert ("๐Bienvenido(a)๐ al simulador de combate magico, te presentamos las instrucciones para utilizar esta herramienta: \n\n1. Selecciona un enemigo, los enemigos tienen un elemento natural por lo cual tendran fortalezas y debilidades contra ciertos elementos, tu mision es descubrirlas. \n\n2. la pantalla de estatus te indicara cuanto tienes de vida , cual es la vida del enemigo y la cantidad de posiones de vida disponibles. \n\n3. La pantalla de accion te indicara 3 acciones, atacar, beber posion o huir, las posiones te suman 200 de vida, huir termina el combate. \n\n4. tienes cuatro elementos para atacar a tu enemigo, descubre su debilidad. \n\n5. Si desas volver a jugar actualiza la pagina. \n\nBuena suerte ๐")

// Variable para selecionar tu oponente

let elementoEnemigo = parseInt(prompt("Seleciciona tu contrincante: \n1. Slime de fuego ๐ฅ \n2. serpiente de agua ๐ง \n3. Escorpion de arena ๐ป \n4. Alcon de viento ๐จ"))

// Funcion para mostrar en pantalla el estado de los jugadores

function estadoActual() {
    alert("ESTADO ACTUAL" + "\n" + "\n๐Vida del heroe: " + vidaHeroe + "\n๐ค Vida del enemigo: " + vidaEnemigo + " " + "\n๐บ Cantidad de posiones: " + posionHeroe)
}

// Funcion para recuperar vida con una posion

function beberPosion() {
    if (vidaHeroe < 1000 && posionHeroe > 0) {
        posionHeroe = posionHeroe - 1
        vidaHeroe = vidaHeroe + 200
    } else if  (vidaHeroe >= 1000) {
        alert ("Tu vida esta al 100  ๐")

    } else if  (posionHeroe <= 0) {
        alert ("No te quedan posiones ๐บ")
    }
}

// Funcion para atacar al enemigo

function trunoDeAtaqueHeroe(elemento) {
    if (elemento === elementoEnemigo) {
        vidaEnemigo = vidaEnemigo - (danoHeroe /2)
        alert ("Usaste el mismo elemento que el enemigo \nNo es efectivo โ")
    }  else if (elemento === 1 && elementoEnemigo === 3) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste LLamarada ๐ฅ๐ฅ๐ฅ๐ฅ๐ฅ \nEs super efectivo โจ")
    } else if (elemento === 2 && elementoEnemigo === 1) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Pistola de agua ๐ง๐ง๐ง๐ง๐ง \nEs super efectivo โจ")
    } else if (elemento === 3 && elementoEnemigo === 4) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Bomba de arena ๐ป๐ป๐ป๐ป๐ป \nEs super efectivo โจ")
    } else if (elemento === 4 && elementoEnemigo === 2) {
        vidaEnemigo = vidaEnemigo - (danoHeroe *2)
        alert ("Usaste Corte de viento ๐จ๐จ๐จ๐จ๐จ \nEs super efectivo โจ")
    } else {
        vidaEnemigo = vidaEnemigo - danoHeroe
        alert ("tu ataque surtio efecto \nBusca su debilidad โ")
    }
}

// Funcion de ataque del enemigo

function turnodeAtaqueEnemigo() {
    vidaHeroe = vidaHeroe - danoEnemigo
    alert ("Recibiste dano enemigo ๐ฅ๐ฅ๐ฅ๐ฅ๐ฅ \nCuida tu salud ๐")
}

// Ciclo de combate

while (estadoCombate === true)    {

    estadoActual()

    let seleccionHeroe = parseInt(prompt("Seleciciona tu accion: \n1. Atacar ๐งจ \n2. Beber posion ๐บ \n3. huir ๐โโ๏ธ"))

    if (seleccionHeroe === 1) {
        let tipoDeAtaqueHeroe = parseInt(prompt("Seleciciona tu tipo de ataque: \n1. Llamarada ๐ฅ \n2.Pistola de agua ๐ง \n3. bomba de arena ๐ป \n4. corte de viento ๐จ"))
        trunoDeAtaqueHeroe(tipoDeAtaqueHeroe)
        turnodeAtaqueEnemigo()
    } else if (seleccionHeroe === 2) {
        beberPosion()
    } else if (seleccionHeroe === 3) {
        alert("Has huido del combate ๐โโ๏ธ๐จ")
        break
    } else {
        let seleccionHeroe = parseInt(prompt("Seleciciona una accion valida: \n1. Atacar ๐งจ \n2. Beber posion ๐บ \n3. huir ๐โโ๏ธ"))
        continue      
    }   

    if (vidaHeroe > 0 && vidaEnemigo <= 0) {
        alert("๐Felicidades has ganado el combate๐")
        estadoCombate = false
    } else if (vidaHeroe <= 0 && vidaEnemigo > 0) {
        alert("Lo siento has perdido, puedes volver a intentarlo ๐ญ")
        estadoCombate = false
    } else if (vidaHeroe <= 0 && vidaEnemigo <= 0) {
        alert("Casi lo logras ha sido un empate, puedes volver a intentarlo ๐ฆฅ")
        estadoCombate = false
    }
}


