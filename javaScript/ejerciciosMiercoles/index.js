


//EXERCISE-01

let random = azar(10)
//let random = azar([1, 2, 3, 4, 5, 6, 7, 8, 9, 10,])

function azar(num) {

    return (Math.random(num) * 10) + 1;

}

alert(random)


//EXERCISE-02

let random = azar(1, 30)

function azar(min, max) {

    return Math.floor(Math.random(min, max) * max) + 1;

}

alert(random)


//EXERCISE-03

let strRandom = strAzar(["hola", "mundo", "lo estoy", "petando"])

function strAzar(str) {

    let result = str[Math.round(Math.random() * (str.length)) - 1];

    return result;
}

alert(strRandom)

//EXERCISE-04


let strGame = strAzarGame(["piedra", "papel", "tijera"])

function strAzarGame(options) {

    let result = options[Math.round(Math.random() * (options.length)) - 1];

    return result;
}

alert(strGame)


//EXERCISE-05

let p2 = autogame(["piedra", "papel", "tijera"])

function autogame(machine) {

    let result = machine[Math.round(Math.random() * (machine.length)) - 1];
    return result;
}

function game(P1, P2) {

    if (P1 === "papel" && P2 === "piedra") {
        alert("P1 Win")
    }
    else if (P1 === "piedra" && P2 === "papel") {
        alert("Machine Win")
    }
    else if (P1 === "piedra" && P2 === "tijera") {
        alert("P1 Win")
    }
    else if (P1 === "tijera" && P2 === "piedra") {
        alert("Machine Win")
    }
    else if (P1 === "tijera" && P2 === "papel") {
        alert("P1 Win")
    }
    else if (P1 === "papel" && P2 === "tijera") {
        alert("Machine Win")
    } else {
        alert("Dead Heat")
    }
}
let p1 = prompt("Player 1 Seleciona piedra , papel o tijera ");
let videogame = game(p1, p2)

//EXERCISE-06

const sustantivos = ["Spider", "Laser", "Microbe", "Spectre", "Scan", "Badger", "Lighting", "Thunder", "Eagle", "Hurricane", "Storm", "Typhoon", "Fire", "Flame", "Flash", "Night", "Whirlwind", "Wind", "Dawn", "Light", "Dragon", "Wolf", "Vemon", "Cobra", "Viper", "Condor", "Stalker", "Panther", "Puma", "Shadow", "Freeze", "Night", "Hammer", "Mist", "Tulip", "Octopus", "Inferno", "Magma", "Patriot", "Stag", "Rhino", "Mole", "Sloth"]
const titulos_masculino = ["Boy", "Man", "Man", "Man", "Man", "Guy", "Mr.", "Doctor", "El", "Professor", "Captain", "Agent", "The", "The", "The", "The", "Lord", "Sgt.", "General"]
const titulos_femenino = ["Girl", "Woman", "Woman", "Woman", "Woman", "Gal", "Miss", "Doctor", "Professor", "Captain", "Agent", "The", "The", "The", "Sgt.", "General"]
const adjetivos = ["Imperial", "Amazing", "Spectular", "Dino", "Massive", "Fantastic", "Wonder", "Techno", "Electro", "Hydro", "Giant", "Super", "Incredi", "Daring", "Mega", "Tiny", "Red", "Dark", "Orange", "Screaming", "Green", "Teal", "Blue", "Golden", "Fearless", "Great", "Ameri", "Pyro", "Robo", "American", "Cyber", "Frozen"]

function sustantive(greatName) {

    let result = greatName[Math.round(Math.random() * (greatName.length)) - 1];

    return result;
}

function nameMasculino(Men) {

    let result = Men[Math.round(Math.random() * (Men.length)) - 1];

    return result;
}

function nameFemenino(Woman) {

    let result = Woman[Math.round(Math.random() * (Woman.length)) - 1];

    return result;
}

function adjective(adjetivo) {

    let result = adjetivo[Math.round(Math.random() * (adjetivo.length)) - 1];

    return result;
}

function compositionResult(test) {

    let resultados = []
    let adjetivo = adjective(adjetivos);
    let sustantivo = sustantive(sustantivos); 
    let femenino = nameFemenino(titulos_femenino); 
    let masculino = nameMasculino(titulos_masculino); 

    if (test === "Mujer") {

        resultados.push(femenino, sustantivo, adjetivo)
    }
    if (test === "Hombre") {

        resultados.push(masculino, sustantivo, adjetivo)
    }
    return resultados;
}
let test = prompt("Idica sexo Mujer o Hombre? : ");
let Genero = compositionResult(test)
alert(Genero)


///FIN!!