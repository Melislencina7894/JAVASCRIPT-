/*Cómo construimos objetos de forma automática, una lista de 30 autos y
generar propiedades para cada uno. 

Función constructora, se genera un template con opciones que van a ser sus paremetros, instancias
con un operador especial. 

meto en el parámetro propiedad que es espero que mi objeto tengo 
mi objeto es la función auto*/


//A todo esto se le llame template. 
 function auto  (marca, modelo, annio)
 {//para armar el template
                this.marca = marca; 
                this.modelo = modelo; 
                this.annio = annio; 
}

/* En consola si pongo la variable auto me imprime todo el template de arriba
pero para empezar a construir el objeto, uno nuevo se construye con una variable*/

//este operador new genera una instancia, un objeto que deriva de otro objeto. 
var autoNuevo = new auto ("Tesla" , "Model 3" , 1998); 

/*si imprimo autoNuevo en consola queda así: 
autoNuevo : { marca: "Tesla", modelo:"" Model 3", annio: 1998}*/

//Ahora genero nuevos objetos que van a ser instancias de la función constructora

var autoNuevo2 = new auto ("Tesla", "Modelo x", 2018); 

//Así puedo generar los 30 autos que tengo en mi lista 