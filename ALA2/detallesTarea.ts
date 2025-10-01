import promptSync from "prompt-sync";
const prompt = promptSync();

import { Tarea } from "./Tarea";

// Nombres de estados
export const nombresEstados: Record<Tarea["estado"], string> = {
    P: "Pendiente",
    E: "En curso",
    T: "Terminada",
    C: "Cancelada"
};

// Función detallesTarea
export function detallesTarea(tarea: Tarea): void {
    console.log("\n===== DETALLES DE LA TAREA =====");
    console.log("Título:", tarea.titulo);
    console.log("Descripción:", tarea.descripcion || "Sin descripción");
    console.log("Estado:", nombresEstados[tarea.estado]);
    console.log(
        "Dificultad:",
        "★".repeat(Number(tarea.dificultad)).split("").join(" ")
    );
    console.log("Fecha de vencimiento:", tarea.fechaVencimiento);
    console.log("Fecha de creación:", tarea.fechaCreacion);

    // ---- OPCIÓN DE EDITAR ----
    let eleccion: number = -1;
    while (eleccion !== 0 && eleccion !== 1) {
        eleccion = parseInt(
            prompt("\nDesea editarla ingrese [1], desea volver [0]: ")
        );
    }

    if (eleccion === 1) {
        let nuevoTitulo = prompt(
            "Ingrese el nuevo título (deje en blanco para mantener actual): "
        );
        if (nuevoTitulo !== "") tarea.titulo = nuevoTitulo;

        let nuevaDescripcion = prompt(
            "Ingrese la nueva descripción (deje en blanco para mantener actual): "
        );
        if (nuevaDescripcion !== "") tarea.descripcion = nuevaDescripcion;

        let nuevoEstado = prompt(
            "Ingrese el nuevo estado ([P],[E],[T],[C], deje en blanco para mantener actual): "
        ).toUpperCase() as Tarea["estado"];
        if (["P", "E", "T", "C"].includes(nuevoEstado)) tarea.estado = nuevoEstado;

        let nuevaDificultadInput = prompt(
            "Ingrese la nueva dificultad [1],[2],[3] (deje en blanco para mantener 1): "
        ).trim();

        if (nuevaDificultadInput === "") {
            tarea.dificultad = "1"; // se asigna 1 si deja vacío
        } else if (["1", "2", "3"].includes(nuevaDificultadInput)) {
            tarea.dificultad = nuevaDificultadInput as "1" | "2" | "3";
        } else {
            console.log("⚠️ Dificultad inválida. Se mantiene el valor actual.");
        }

        let nuevoVencimiento = prompt(
            "Ingrese la nueva fecha de vencimiento (AAAA-MM-DD, deje en blanco para mantener actual): "
        );
        if (nuevoVencimiento !== "") tarea.fechaVencimiento = nuevoVencimiento;

        console.log("\n¡Tarea actualizada!");
    }
}
