 
 document.getElementById("funcion1").onclick = uno;
 document.getElementById("funcion2").onclick = dos;
 document.getElementById("funcion3").onclick = tres;
 document.getElementById("funcion4").onclick = cuatro;
 


/* La función ejercicioUno corresponde a estas 3 consignas correspondientes
1. Crear dos variables, num1 y num2, pedirle al usuario que ingrese los números,
   usando la función prompt y asignarlas a las variables creadas, 
   crear una variable suma y guardar el resultado de la suma de num1 y num2, mostrar con un alert la suma.

2. Agregar al código anterior un condicional para mostrar por consola cuál de los númeroSs
 ingresados (num1 y num2) es mayor.

3. Agregar una condición extra para el caso que ambos números sean iguales.
 Pueden investigar la sentencia else if.*/


 /*cuando se capturan datos por prompt estos se convierte en string, es por eso que concatena 
los números ingresados, no los suma
  El parseInt es para que el dato que ingrese lo deje como entero*/
  
function uno () {
  const num1 = parseInt (prompt ("Ingrese número 1")),
  num2 = parseInt(prompt("Ingrese número 2"));
     const suma = (num1+ num2);
     alert ("El resultado de la suma es: "+ suma);

if (num1 > num2){
    console.log (num1 + " Es mayor que "+ num2);
} 
else if (num1 < num2)
 {
    console.log (num2 + " Es mayor que "+ num1); 
} 
else
    console.log ("Son iguales");
return alert ("El resultado mayor, menor o igual se muestra por consola."); 
}


/* 4 Crear una constante con un valor, dentro de un bucle pedir al usuario que ingrese un número, 
verificar si el número ingresado es igual a la constante, sí lo es terminar el bucle y
 mostrar un mensaje diciendo que adivino el número,
 sino seguir pidiendo que ingrese el número. Pueden investigar cómo usar un do ... while.*/


function dos () {

const num = 5;  

do {
    numero = parseInt (prompt ("Ingrese un número")); 
    if (numero!==num) {
        alert ("Continuar intentando, ingrese un número menor a 10");
    }
}
//mientras el numero sea distinto a num, se ejecuta el do 
while (numero!==num);

   return alert ("Muy bien, adivinaste el número!"); 
}



// 5 Crear un bucle que muestre los numero del 1 al 20 pero solo los números que sean múltiplo de 3.
function tres () {
    
    for (let i = 1 ; i <= 20 ; i++){
       
        if((i % 3) == 0){
         
        console.log(i);
        }
    }
    //cuando utilizo una función utilizo return.  
    return alert("En consola se muestra el resultado.");
}



/* 6 Crear un bucle for que muestre los numero del 1 al 20, 
dentro del bucle usar la función confirm para que el usuario decida si quiere ver el siguiente número, 
en caso de no querer seguir pueden usar la sentencia break.*/

function cuatro () {
for ( let i=1 ; i <= 20 ; i++) {
    alert ("Número : " + i);
    let siguienteNumero = confirm ("¿Desea ver el siguiente número?"); 
  
    if (!siguienteNumero){
     break;
    }
}
 return alert("Ejercicio finalizado");
}

for (let i=11 ; i<3 ; i++){
  for (let j=0 ; j<3 ; i++){ 
  console.log ( i + "," + j);
}
}