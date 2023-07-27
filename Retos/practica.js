//Variables

//Suma
function Suma(...numeros){
    let num = 0;

    for (let i = 0; i < numeros.length; i++) {
        num += numeros[i];
        
    }

    return num;
}
console.log(Suma(1,2));
 //reto 2

function esPrimo (numero){
   if (numero <= 1) {
        return false;
   }

   for(let i = 2; i < numero; i++){
    if (numero % i === 0) {
        return false;
    }
   }
   return true;
}

//resta
function Resta(numero){
    let res = 3;
    if (res < numero) {
        return true;
    }else if (res > numero) {
        return false;
    }
}
console.log(Resta(6))