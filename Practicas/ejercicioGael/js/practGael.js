const nombres = ["Anakin", "Peter", "Jhon", "Clark", "Bruce"];
document.getElementById("demo").innerHTML = nombres.toString();

function seEncuentra(){
	let nom = prompt("Ingresa el nombre:");
	
	if((nombres.includes(nom)) == true){
		document.getElementById("demo2").innerHTML = "El estudiante está en la lista";
	}else{
		document.getElementById("demo2").innerHTML = "El estudiante no está en la lista";
	}
} 

function ordenar(){
	nombres.sort();
	document.getElementById("demo3").innerHTML = nombres;
}