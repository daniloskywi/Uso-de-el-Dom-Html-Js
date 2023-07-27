
const h1 = document.querySelector("h1");
const form = document.querySelector("#form");
const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnBoton");
const pResultado = document.querySelector("#resultado")

form.addEventListener("submit", btnClick);

function btnClick(event){
    event.preventDefault();
    const Suma = input1.value + input2.value;
    pResultado.innerText = "Resulado: " + Suma;
    
}

