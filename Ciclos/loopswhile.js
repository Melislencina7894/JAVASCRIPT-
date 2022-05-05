
//Se realiza en consola todo esto. 
var estudiantes = ["María", "Rosa", "Daniel"]; 

//pasamos como parámetro al estudiante que voy a saludar 
function saludarEstudiantes(estudiante){
    console.log ("Hola, ${estudiante}"); 
}

/*mientras lo que esté adentro de while sea verdad se genera el bucle o realiza la acción que sigue dentro. 
mando a llmar a mi arrays. Mientras la longitud de mi arrays sea mayor a cero, lo que esté adentro 
de while va a pasar. Cuando sea igual a cero se rompe el ciclo*/ 
while (estudiantes.lenght >0) {
    //esto es para ver como va eliminando la propiedad shift el último estudiante
    console.log (estudiantes); 
    //va  a ir sacando elementos de nuestro arrays con el mètodo de mutación, cada vez que se cumpla un loops
    var estudiantes = estudiantes.shift (); 
    saludarEstudiantes (estudiante); 
}

/*resuktado 

Hola, María 
Hola, Rosa.
Hola, Daniel. */


//Ejemplo completo 
/*var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

functionsaludarEstudiante(estudiante) {
    console.log(`Hola ${estudiante}`);
}

var i = 0;

//do-while
do {
    saludarEstudiante(estudiantes[i]);
    i++;
} while (i < estudiantes.length)

//while
while (estudiantes.length > 0) {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
}*/

/*do {
    var estudiante = estudiantes.shift();
    saludarEstudiante(estudiante);
} while (estudiantes.length > 0);*/