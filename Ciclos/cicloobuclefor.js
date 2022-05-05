/*Ciclo o loops o bucle Esto permite que una tarea se repita sin tener que hacerlo de forma manual
Mientras dentro del loops se cumpla una condición, la tarea se pasa de manera repetida 

En la consola

Primer método 

var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"]; 

function saludarEstudiantes (estudiante) {
   //se usa con comilla invertida
console.log (´Hola, ${estudiante}´);
}

for (var i=1 ; i < estudiantes.lenght; i++) {
    saludarEstudiantes (estudiantes[i]);
}  
como resultado 
si apreto enter
es Hola, María
   Hola, Sergio
   Hola, Rosa
   Hola, Daniel 

Segundo método con for 
tenemos un arrays de estudiantes, y mando a llamar un estudiante de este arrays
for (var estudiante of estudiantes){
   saludarEstudiantes (estudiante);
}

como resultado 
si apreto enter
es Hola, María
   Hola, Sergio
   Hola, Rosa
   Hola, Daniel 

   Es decir la var estudiante se convierte en el index. 
   Inicializamos una variable en singular del arrays*/
   