let jaguar = {
    nombre: "Panthera onca",
    peso: "70-100 kg",
    rugir: function() { console.log("¡Grrr!"); }
};

console.log(jaguar.nombre); // Panthera onca
console.log(jaguar["peso"]); // 70-100 kg

jaguar.rugir(); // Imprime: ¡Grrr!
