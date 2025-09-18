import promptSync from "prompt-sync";
const prompt = promptSync();

export const nombresEstados = { "P": "Pendiente", "E": "En curso", "T": "Terminada", "C": "Cancelada" };

export function detallesTarea(tarea) {
    console.log("\n===== DETALLES DE LA TAREA =====");
    console.log("Título:", tarea.titulo);
    console.log("Descripción:", tarea.descripcion || "Sin descripción");
    console.log("Estado:", nombresEstados[tarea.estado]);
    console.log("Dificultad:", "★".repeat(tarea.dificultad).split("").join(" "));
    console.log("Fecha de vencimiento:", tarea.fechaVencimiento);
    console.log("Fecha de creación:", tarea.fechaCreacion);

    // ---- OPCIÓN DE EDITAR ----
    let eleccion = -1;
    while(eleccion !== 0 && eleccion !== 1) {
        eleccion = parseInt(prompt("\nDesea editarla ingrese [1], desea volver [0]: "));
    }

    if(eleccion === 1) {
        let nuevoTitulo = prompt("Ingrese el nuevo título (deje en blanco para mantener actual): ");
        if(nuevoTitulo !== "") tarea.titulo = nuevoTitulo;

        let nuevaDescripcion = prompt("Ingrese la nueva descripción (deje en blanco para mantener actual): ");
        if(nuevaDescripcion !== "") tarea.descripcion = nuevaDescripcion;

        let nuevoEstado = prompt("Ingrese el nuevo estado ([P],[E],[T],[C], deje en blanco para mantener actual): ").toUpperCase();
        if(["P","E","T","C"].includes(nuevoEstado)) tarea.estado = nuevoEstado;

        let nuevaDificultad = prompt("Ingrese la nueva dificultad [1],[2],[3] (deje en blanco para mantener actual): ");
        if(nuevaDificultad !== "") tarea.dificultad = nuevaDificultad;

        let nuevoVencimiento = prompt("Ingrese la nueva fecha de vencimiento (AAAA-MM-DD, deje en blanco para mantener actual): ");
        if(nuevoVencimiento !== "") tarea.fechaVencimiento = nuevoVencimiento;

        console.log("\n¡Tarea actualizada!");
    }
}
