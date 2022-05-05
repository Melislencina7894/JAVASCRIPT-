/*Un Array es un tipo objeto.Es una estructura de datos. Puede guardar datos distintos dentro,
 guarda los datos en forma de lista.

 Nota:no se puede guardar string y enteros en un mismo array
.lenght devuelve la longitud del array.
.push() agrega elementos al final de array.
.pop() elimina el último elemento del array.
.unshift() agrega un elemento al array, pero lo agrega en primer lugar.
**.shift() **elimina el elemento que está en el inicio del array.
**.indexOf ** devuelve la posición de un elemento del array.*/


var frutas = ["Manzana", "Banana", "Cereza", "Fresa"]; 

/*En consola se escribe
console.log (frutas); 
Y se imprime toda esta lista */

/*Consola
console.log (frutas.lenght); 
4
Para acceder a cada elemento 
console.log (frutas[0]);
Manzana 

Para agregar desde consola
var masFrutas = frutas.push ("Uvas"); 
se imprime: ["Manzana", "Banana", "Cereza", "Fresa", "Uvas"]; 

Por si quiero eliminar uvas
var ultimo = frutas.pop ("Uvas");

agrega un elemento al inicio
var nuevaLongitud = frutas.unshift ("Pera"); 

elimina elemento del inicio 
var borrarFruta = frutas.shift ("Pera"); 

Esto es para ver en qué posición está cada elemento
var posicion = frutas. indexOf ("Cereza"); 
si mando a llamar posicion 
3 */