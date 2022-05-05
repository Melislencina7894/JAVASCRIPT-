//esto está en global
var miNombre= "Melisa" 

//var dentro de este código está en local 
function nombre() {
    var miApellido= "Lencina"
    console.log(miNombre+""+miApellido);
}

/*si mando a llamar en la consola
miNombre = Melisa 
pero si mando a llamar mi variable local 
miApellido= figura error, porque no se puede acceder a la variable local*/