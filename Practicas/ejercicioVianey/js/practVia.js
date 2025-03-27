let nombre = prompt("Por favor ingresa tu nombre");
let edad = prompt("Por favor ingresa tu edad");
var mayor;

function saludo(){
	return console.log("Que pacho " + nombre);
}

function esMayorDeEdad(){
	//let mayor;
	if(edad > 18){
		mayor = true;
	} else {
		mayor = false;
	}
	console.log(mayor);
}