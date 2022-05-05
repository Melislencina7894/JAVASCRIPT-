/*Para ver si es verdadero o falso 

Lo que está dentro del paréntesis tiene que ser verdad

if () {

}*/

//En consola del navegador 

if (true) {
console.log ("Hola");
}
//Imprime Hola 

//Pero si pongo 
if (false) 
{
    console.log ("Hola"); 
}
//Se imprime undefined 

//El if lo único que hace es validar lo que está dentro del paréntesis. Si no, no hace nada. 

//...............................................................

if (true) {
    console.log ("Hola");
} else {
    console.log ("Soy falso"); 
} 

//.........

/*Indicación: Si el usuario es mayor de edad va a poder votar, si no es mayor de edad no va a poder 
votar, pero si es mayor de 18 no es la primera que ha votado*/

var edad=18; 

if (edad===18){
    console.log ("Puedes votar, tu primera votación");
} else if (edad>18){
    console.log ("Puedes votar de nuevo");
} else (edad<18)
 {
    console.log ("Aún no puedes votar"); 
}

/*si var edad= 18 le saldrá la primera condición. 
si var edad=23 segunda condición 
si var edad=17 tercera condición*/

//Puedo utilizar tantos else if necesite

//En una sola línea. 
//Operador ternario 

Condition ? true: false; 

var numero = 1; 

//var resultado ===1?; "Si soy un uno": "No soy un uno";