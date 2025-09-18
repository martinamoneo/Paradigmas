import promptSync from "prompt-sync";
const prompt = promptSync();

import { detallesTarea } from "./detallesTarea.js";

const nombresEstados = {
    "P": "Pendiente",
    "E": "En curso",
    "T": "Terminada",
    "C": "Cancelada"
};

export function mostrarTareas(listaTareas) {
    if(listaTareas.length === 0) {
        console.log("\nNo hay tareas.");
        return;
    }

    let opcion = ""; // guardar la elección del usuario

    while(opcion !== "V") { // mientras no elija volver
        console.log("\n===== VER TAREAS =====");
        console.log("[P] Pendientes");
        console.log("[E] En curso");
        console.log("[T] Terminadas");
        console.log("[C] Canceladas");
        console.log("[A] Todas");
        console.log("[V] Volver");

        opcion = prompt("Ingrese su elección: ").toUpperCase();

        switch(opcion) {
            case "P":
            case "E":
            case "T":
            case "C":
            case "A":
                
                let tareasFiltradas = [];// array vacío para guardar las tareas

                for(let i = 0; i < listaTareas.length; i++) {
                    if(opcion === "A" || listaTareas[i].estado === opcion) {
                        tareasFiltradas.push(listaTareas[i]);
                    }
                }

                if(tareasFiltradas.length === 0) {
                    console.log("\nNo hay tareas con ese estado.");
                } else {
                    console.log("\nTareas:");
                    tareasFiltradas.forEach((t, i) => {
                        console.log(`[${i+1}] ${t.titulo}`);
                    });

                    // ---- USAR DETALLES DE TAREA ----
                    let numTarea = -1;
                    while(numTarea !== 0) {
                        numTarea = parseInt(prompt("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver: "));

                        if(numTarea === 0) {
                            break; // volvemos al menú anterior
                        } else if(numTarea > 0 && numTarea <= tareasFiltradas.length) {
                            const tareaSeleccionada = tareasFiltradas[numTarea - 1];
                            detallesTarea(tareaSeleccionada); // llamamos a la función detalles
                        } else {
                            console.log("Número inválido.");
                        }
                    }
                }
                break;

            case "V":
                console.log("Volviendo al menú principal...");
                break;

            default:
                console.log("Opción inválida.");
        }
    }
}
