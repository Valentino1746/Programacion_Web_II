// Solicitar una cadena al usuario
//let nombre = prompt("Por favor, ingresa tu nombre:");

// Mostrar el valor ingresado
//console.log("El nombre ingresado es: " + nombre);

//let text = `Welcome ${firstName}, ${lastName}!`;

function saludoPersonalizado(){
	let nombre = prompt("Por favor, ingresa tu nombre:");
	let edad = prompt("Por favor, ingresa tu edad:");
	let text = `Hola ${nombre}, tienes ${edad}!`;
	console.log(text);
}

function esPar(){
	let numero = prompt("Por favor, ingresa el número:");
	if(numero %2 == 0){
		console.log("Es par");
	}else{
		console.log("Es impar")
	}
}

const numeroGrande = 9007199254740991n;
const otroNumeroGrande = 1000000000000000000n;

console.log("numeroGrande:", numeroGrande);
console.log("otroNumeroGrande:", otroNumeroGrande);

