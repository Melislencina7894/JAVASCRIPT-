/*JS es un lenguaje que está diseñado en un paradigma de objetos.
Los objetos se manejan con propiedad, combinaciones entre palabras claves y valores*/
var miAuto = { marca : "Toyota",
               modelo : "Corolla", 
               annio : 10970
            }; 

/*En crossOriginIsolated, cómo  puedo acceder a los objetos.
Para acceder al valor es con el punto y la palabra clave*/

//llamo así: 

/* miAuto.marca 
   miAuto.modelo
   miAuto.annio


Podemos hacer que una de las propiedades del objeto sea una función y hacer cosas con otras
de las propiedades

Al agregar una propiedad como función se le llama método, son métodos de objetos.*/
var miAuto = { marca : "Toyota",
               modelo : "Corolla", 
               annio : 2020,
               detalleDelAuto : function () {
                   //el this es una variable que hace referencia a un objeto, en este caso a su padre miAuto.
                   //Entonces el this hace referencia al objeto global. 
                   console.log ( "Auto ${this.modelo} ${this.annio}");
                   //la forma de poder ingresar al método es la función que está dentro del objeto
               } 

            }; 
/* en consola mando a llamar, pero como su valor es una función mando a llamar como si fuera una función 
miAuto.detalleDelAuto (); 
sale "Auto Corolla 2020 " 

Así es como se puede ingresar al método de un objeto. */