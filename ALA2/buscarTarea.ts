import promptSync from "prompt-sync";
const prompt = promptSync();

import { detallesTarea } from "./detallesTarea.js"; 
import { Tarea } from "./Tarea";

export function buscarTareas(listaTareas: Tarea[]) {
    if(listaTareas.length === 0) {
        console.log("\nNo hay tareas para buscar.");
        return;
    }

    let seguirBuscando = true;

    while(seguirBuscando) {
        console.log("\n===== BUSCAR TAREAS =====");
        let termino = prompt("Introduce el título de una tarea para buscarla (o deje en blanco para volver): ");

        if(termino === "") {
            seguirBuscando = false; // volvemos al menú principal
            break;
        }

        // buscar tareas con la palabra
        let tareasEncontradas: Tarea[] = [];
        for(let i = 0; i < listaTareas.length; i++) {
            if(listaTareas[i].titulo.toLowerCase().includes(termino.toLowerCase())) {
                tareasEncontradas.push(listaTareas[i]);
            }
        }

        if(tareasEncontradas.length === 0) {
            console.log("No hay tareas relacionadas con la búsqueda.");
        } else {
            console.log("\nEstas son las tareas relacionadas:");
            tareasEncontradas.forEach((t, i) => {
                console.log(`[${i+1}] ${t.titulo}`);
            });

            // Detalles de las tareas encontradas
            let numTarea = -1;
            while(numTarea !== 0) {
                numTarea = parseInt(prompt("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver: "));

                if(numTarea === 0) {
                    break; // volvemos a la búsqueda
                } else if(numTarea > 0 && numTarea <= tareasEncontradas.length) {
                    const tareaSeleccionada = tareasEncontradas[numTarea - 1];
                    detallesTarea(tareaSeleccionada); // funcion detalles
                } else {
                    console.log("Número inválido.");
                }
            }
        }
    }

    console.log("Volviendo al menú principal...");
}
