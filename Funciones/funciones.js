//las funciones son sentencias, paa hacer cálculos, validar. 
//hay dos tipos declarativas y de expresión. 


/* declarativas. Palabra reservada clave function y hay que darle un nombre. 
Utilizo el nombre de la función para guardar un espacio en la memoria y guardar el cálculo dentro de la función. 
Una función inicializa un valor en la memoria y lo guarda*/
function miFuncion () {
  return 3
}
//así es como mando a llamar mi función declarativa
miFuncion;




/*expresión: la variable va a guardar otro valores como función. Generamos una variable que se llama miFuncion
que está guardando una función. cuando llame la función expresiva con el nombre de la función ,hay que ponerle paréntesis
 */
/* también se le llama anónima: Genero una variable que tiene como valor una función, pero la función no tiene nombre*/
var miFuncion = function (a,b) {
  return a + b;
}

miFuncion ()
