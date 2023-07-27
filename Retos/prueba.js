const name = "Danilo ";
const apellido = "Rodriguez Diaz";
const edad = 20;

function nombreCompleto(name, lastname){
    return name + " " + lastname;
}
nombreCompleto("Jose ", "pizzaro")

function saludar(nombre, apellide){
    const NombreComplete = nombreCompleto(nombre, apellide);
    console.log("Mi nombre es" + NombreComplete + "y la tengo grande")
}

///
const dibujar = "lapiz";

switch(dibujar){
    case"Lapicero":
        console.log("Es para escribir");
        break;
    case "lapiz":
        console.log("Este es para dibujar");
        break;
    case "color":
        console.log("Este es para colorear");
        breack;
}

if (dibujar == "lapicero") { 
    console.log("Es para escribir");
} else if(dibujar == "lapiz"){
    console.log("Este es para dibujar");
} else if(dibujar == "color"){
    console.log("Este es para colorear")
}

///
for(let i = 0; i < 5; i++){
    console.log("Si el vlor de i es: " + i);
}
for(let i = 10; i <= 2; i--){
    console.log("Si el vlor de i es: " + i);
}

//let i = 0;
while (i < 5) {
    console.log("Si el vlor de i es: " + i);
    i++;
}

let i = 10;
while (i >= 2) {
    console.log("Si el vlor de i es: " + i);
    i--;
}

// 
let respueta;

while (respueta != "4") {
    let pregunta = prompt("¿Cuanto es 2 + 2 ?");
    respueta = pregunta;
}

//
const numeros = [1, 2, 3, 4, 5];
console.log(numeros);

const number = {
    numeroOne: 1,
    numerosTwo: 2,
    numerosThree: 3,
    numerosFour: 4,
    numerosFive: 5,
    ropa: ["zapato", "camisa ", "pantalon", "medias","interiores"]
}

console.log(number)