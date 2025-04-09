function nombre(){
	let n = prompt("Ingrese su nombre:");
	console.log("Hola tu nombre es " + n. toUpperCase());
	document.getElementById("demo1").innerHTML = "Hola tu nombre es " + n. toUpperCase();
	if(n.includes("e") == true){
		console.log("Tu nombre contiene la letra E");
		document.getElementById("demo2").innerHTML = "Tu nombre contiene la letra E";
	}else{
		console.log("Tu nombre no contiene la letra E");
		document.getElementById("demo2").innerHTML = "Tu nombre no contiene la letra E";
	}

	console.log("Tu nombre empieza con la letra: " + n.charAt(0))
	document.getElementById("demo3").innerHTML = "Tu nombre empieza con la letra: " + n.charAt(0);
}
