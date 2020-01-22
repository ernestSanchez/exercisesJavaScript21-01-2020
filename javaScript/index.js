
//EXERCISE-02

let numberTop = searchNumber(12, 7)

function searchNumber(a, b) {



    if (a < b) {
        alert(b)
    } if (a > b) {
        alert(a)
    }

}

//EXERCISE-03

let numeros = searchArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,])

function searchArray(a) {

    return Math.max(...a);

}

alert(numeros)

//EXERCISE-04

let compra = descarteFruta(["apples", "orange", "apples", "bananas"]);

function descarteFruta(fruta) {

    let result = []

    for (let i = 0; i < fruta.length; i++) {
        if (fruta[i] !== "apples") {
            result.push(fruta[i]);


        }
    } return result;

}

alert(compra)

//EXERCISE-05

let opuesto = numReverse(40)

function numReverse(num) {

    let result = num;

    if (result < 0 || result >= 0) {
        console.log(result = -result);
    }
    return result;
}

alert(opuesto)

//EXERCISE-06

let resultado = divisibles(20, 2)

function divisibles(a, b) {

    let result = []

    if (a % b === 0) {
        result.push(true)
    } else {
        result.push(false)
    }
    return result;
}

alert(resultado)

//EXERCISE-07

let numero = prompt("Dime un numero del 1 al 7: ");
numero = parseInt(numero);

const DiaSemana = obtenerDiaSemana(numero);

function obtenerDiaSemana(numero) {

    let result;

    switch (numero) {
        case 1:
            result = "Sunday";
            break

        case 2:
            result = "Monday";
            break

        case 3:
            result = "Tuesday";
            break
        case 4:
            result = "Wednesday";
            break
        case 5:
            result = "Thursday";
            break
        case 6:
            result = "Friday";
            break
        case 7:
            result = "Saturday";
            break

        default: result = "No es un numero del 1 al 7 "

    }
    return result;
}

alert(DiaSemana)

//EXERCISE-08

let waterForTime = timeWater(11.8)

function timeWater(time) {

    return Math.floor(time * 0.5);

}

alert(waterForTime)

////EXERCISE-09

let hojas = prompt("dime numero: ")
hojas = parseInt(hojas)
let queSera = margarita(hojas)

function margarita(hojas) {

    let result = []

    if (hojas % 2 === 0) {
        result.push(" Me quiere ");
    } else {
        result.push(" No me quiere ");
    }

    return result;
}

alert(queSera)

////EXERCISE-10

let p1 = prompt("Player 1 Seleciona piedra , papel o tijera ")
let p2 = prompt("Player 2 Seleciona piedra , papel o tijera ")

let videogame = game(p1, p2)

function game(P1, P2) {

    if (P1 === "papel" && P2 === "piedra") {
        alert("P1 Win")
    }
    else if (P1 === "piedra" && P2 === "papel") {
        alert("P2 Win")
    }
    else if (P1 === "piedra" && P2 === "tijera") {
        alert("P1 Win")
    }
    else if (P1 === "tijera" && P2 === "piedra") {
        alert("P2 Win")
    }
    else if (P1 === "tijera" && P2 === "papel") {
        alert("P1 Win")
    }
    else if (P1 === "papel" && P2 === "tijera") {
        alert("P2 Win")
    } else {
        alert("Dead Heat")
    }
}


////EXERCISE-11

let array = arrays(["hola","mundo",],[4,5,6])

function arrays(a,b) {

    let result = []

            result.push([a,b])
    
            return result;
}
alert(array)

