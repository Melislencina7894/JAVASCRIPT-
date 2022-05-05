// hoisting es cuando las funciones y las variables se procesan antes que se ejecute cualquier tipo de código 



//HOISTING DE LAS VARIABLES. 
//declaramos la variable 
var miNombre;
// inicializamos: damos valor a la variable
miNombre="Melisa";


/*que pasa si hacemos esto. 
El console.log es una función que da el navegador. Ayuda a imprimir en la consola. 

¿Qué pasa si ponemos primero console.log, sin antes inicializar la variable? */
console.log(miNombre)

var miNombre = "Melisa";

//es undefined

/*Sucedio porque mandamos a llamar una variable antes de declararla e inicializarla. 
js dice que posiblemente es una variable, pero no la ve declarada, pone el nombre, pero 
como está inicializada js le pone el valor de undefined

Es como si hiciera esto JS por dentro 

console.log(undefined);

var miNombre = (miNombre + "soy ese joisting");
miNombre ="Melisa"; 

undefined soy ese jointing 
"Melisa"
*/



// hOISTING DE FUNCIONES 
hey(); //mandamos a llamar la función 

//inicializamos la función 
function hey() {
    console.log ("Hola" + miNombre);
}

//declaramos e inicializamos la variable
var miNombre = "Melisa"

//da Hola undefined 

/*Esto pasa porque js cuando llega a la variable mi Nombre y no está inicializada ni declarada, 
la sube arriba y la declara  como undefined*/

//lo correcto sería así: 
hey();
var miNombre = "Melisa"

function hey() {
    console.log ("Hola" + miNombre);
}

//respuesta: Hola Melisa 
