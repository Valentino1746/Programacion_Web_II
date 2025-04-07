// Declaramos un número (puedes cambiar este valor)
const numero = 1746.1120;

// Mostramos el análisis en la consola
console.log("--- Análisis del Número ---");
console.log(`Número original: ${numero}`);

// a. Verificamos si es entero
console.log(`¿Es entero? ${Number.isInteger(numero) ? "Sí" : "No"}`);

// b. Redondeamos a 2 decimales
console.log(`Redondeado a 2 decimales: ${numero.toFixed(2)}`);

// c. Convertimos a notación científica con 3 dígitos
console.log(`Notación científica (3 dígitos): ${numero.toExponential(3)}`);

function ultiPrim(){

	const numeros = [46, 11, 17, 20, 7];
	
	console.log(`Array original: [${numeros.join(', ')}]`);
	console.log(`Primer número: ${numeros[0]}`);
	console.log(`Último número: ${numeros[numeros.length - 1]}`);

	const suma = numeros.reduce((total, num) => total + num, 0);
	console.log(`Suma total: ${suma}`);
	nuevoNumero=prompt("Ingresa nuevo numero al arreglo:");
	numeros.push(nuevoNumero);
	console.log(`Array actualizado: [${numeros.join(', ')}]`);
}

function mayorMenor(){
	// Solicitar un valor al usuario (versión navegador)
	const inputUsuario = prompt("Ingrese un número:");
	const numero = Number(inputUsuario);

	if (isNaN(numero)) {
	    console.log(`"${inputUsuario}" ---> El valor ingresado no es un número (NaN).`);
	} else {
	    let mensaje = "";
	    
	    // Verificamos primero los límites extremos
	    if (numero > Number.MAX_SAFE_INTEGER) {
	        mensaje = "El número es mayor que MAX_SAFE_INTEGER.";
	    } else if (numero < Number.MIN_SAFE_INTEGER) {
	        mensaje = "El número es menor que MIN_SAFE_INTEGER.";
	    } 
	    // Luego verificamos MIN_VALUE (para números muy cercanos a cero)
	    else if (numero !== 0 && Math.abs(numero) < Number.MIN_VALUE) {
	        mensaje = "El número es menor que MIN_VALUE.";
	    } else {
	        mensaje = "Es un número válido.";
	    }
	    
	    console.log(`${inputUsuario} ---> ${mensaje}`);
	}
}