let scanf = require('scanf');

//Pide por consola la edad
console.log('Por favor ingresa una edad ');
let edad = scanf('%d');

//COMPRUEBA QUE LO INTRODUCIDO ES UN NÚMERO:
if (Number(edad) == edad) {
    //COMPRUEBA SI ES MAYOR DE EDAD:
	if (edad > 18) {
		console.log("Puedes conducir");
	}
    //SI NO ES MAYOR DE EDAD:
    else{
        console.log("No puedes conducir");
    }
}
//SI LO INTRODUCIDO NO ES UN NUMERO:
else {
	console.log("Introduce un numero válido");
}