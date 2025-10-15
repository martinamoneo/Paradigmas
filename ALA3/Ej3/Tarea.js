// Constructor de Tarea
function Tarea(titulo, descripcion, estado, dificultad, fechaVencimiento) {
    this.titulo = titulo;
    this.descripcion = descripcion || "Sin descripción";
    this.estado = estado; // "P" | "E" | "T" | "C"
    this.dificultad = dificultad; // "1" | "2" | "3"
    this.fechaVencimiento = fechaVencimiento || "Sin fecha";
    this.fechaCreacion = new Date().toISOString().split("T")[0];
}

// Método para mostrar detalles de la tarea
Tarea.prototype.mostrarDetalles = function() {
    const nombresEstados = { P: "Pendiente", E: "En curso", T: "Terminada", C: "Cancelada" };
    console.log("\n===== DETALLES DE LA TAREA =====");
    console.log("Título:", this.titulo);
    console.log("Descripción:", this.descripcion);
    console.log("Estado:", nombresEstados[this.estado]);
    console.log("Dificultad:", "★".repeat(this.dificultad).split("").join(" "));
    console.log("Fecha de vencimiento:", this.fechaVencimiento);
    console.log("Fecha de creación:", this.fechaCreacion);
};

// Método para editar tarea
Tarea.prototype.editarTarea = function() {
    const promptSync = require("prompt-sync");
    const prompt = promptSync();

    let eleccion = -1;
    while(eleccion !== 0 && eleccion !== 1) {
        eleccion = parseInt(prompt("\nDesea editarla ingrese [1], desea volver [0]: "));
    }

    if(eleccion === 1) {
        let nuevoTitulo = prompt("Ingrese el nuevo título (deje en blanco para mantener actual): ");
        if(nuevoTitulo !== "") this.titulo = nuevoTitulo;

        let nuevaDescripcion = prompt("Ingrese la nueva descripción (deje en blanco para mantener actual): ");
        if(nuevaDescripcion !== "") this.descripcion = nuevaDescripcion;

        let nuevoEstado = prompt("Ingrese el nuevo estado ([P],[E],[T],[C], deje en blanco para mantener actual): ").toUpperCase();
        if(["P","E","T","C"].includes(nuevoEstado)) this.estado = nuevoEstado;

        let nuevaDificultad = prompt("Ingrese la nueva dificultad [1],[2],[3] (deje en blanco para mantener actual): ");
        if(["1","2","3"].includes(nuevaDificultad)) this.dificultad = nuevaDificultad;

        let nuevoVencimiento = prompt("Ingrese la nueva fecha de vencimiento (AAAA-MM-DD, deje en blanco para mantener actual): ");
        if(nuevoVencimiento !== "") this.fechaVencimiento = nuevoVencimiento;

        console.log("\n¡Tarea actualizada!");
    }
};

export { Tarea };