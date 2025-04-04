    // Captura el botón y el elemento h1

    let boton = document.getElementById("boton");
    let titulo = document.getElementById("titulo");

    // Agrega el evento
    boton.addEventListener("click", function() {
      titulo.textContent = "¡Que pachó!";
    });


// JS Object Display (como ya lo tienes)
// Create an Object
const motocicleta = {
  marca: "MV Agusta",
  modelo: "Brutale 1000rr",
  cilindrada: 1000,
  color: "Azul"
};

// Display Properties
document.getElementById("demo").innerHTML = 
  `Marca: ${motocicleta.marca}<br>
   Modelo: ${motocicleta.modelo}<br>
   Cilindrada: ${motocicleta.cilindrada}cc<br>
   Color: ${motocicleta.color}`;

// JS Object Constructors
function Motocicleta(marca, modelo, cilindrada, color) {
  this.marca = marca;
  this.modelo = modelo;
  this.cilindrada = cilindrada;
  this.color = color;
    this.mostrarDetalles = function() {
    return `Marca: ${this.marca}, Modelo: ${this.modelo}, Cilindrada: ${this.cilindrada}, Color: ${this.color}`;
  };
}

// Crear un nuevo objeto usando el constructor
const miMoto = new Motocicleta("Ducati", "Panigale V4", 1103, "Rojo");
const miMoto0 = new Motocicleta("Kawasaki", "H2r", 998, "Mirror Coated Matte Spark Black");
const miMoto1 = new Motocicleta("Harley-Davidson", "Knucklehead", 1200, "Negro");
const miMoto2 = new Motocicleta("Honda", "CB750", 750, "Dorado");
const miMoto3 = new Motocicleta("Triumph", "Bonneville T120", 650, "Verde");
const miMoto4 = new Motocicleta("Ducati", "916", 916, "Amarillo");
const miMoto5 = new Motocicleta("Suzuki", "GSX-R750", 750, "Azul y Blanco");
const miMoto6 = new Motocicleta("BMW", "R1200GS", 1170, "Gris");
const miMoto7 = new Motocicleta("Kawasaki", "Ninja ZX-10R", 998, "Verde Lima");
const miMoto8 = new Motocicleta("Indian", "Scout", 740, "Rojo Oscuro");
const miMoto9 = new Motocicleta("Vespa", "946", 125, "Blanco");
const miMoto10 = new Motocicleta("Suzuki", "Hayabusa", 1299, "Gris y Negro");



// Mostrar las propiedades del objeto construido
document.getElementById("demo2").innerHTML = 
  `Marca: ${miMoto.marca}<br>
   Modelo: ${miMoto.modelo}<br>
   Cilindrada: ${miMoto.cilindrada}cc<br>
   Color: ${miMoto.color}`;

//Mostrar las motos en consola
console.log(miMoto0.mostrarDetalles());
console.log(miMoto1.mostrarDetalles());
console.log(miMoto2.mostrarDetalles());
console.log(miMoto3.mostrarDetalles());
console.log(miMoto4.mostrarDetalles());
console.log(miMoto5.mostrarDetalles());
console.log(miMoto6.mostrarDetalles());
console.log(miMoto7.mostrarDetalles());
console.log(miMoto8.mostrarDetalles());
console.log(miMoto9.mostrarDetalles());
console.log(miMoto10.mostrarDetalles());