import promptSync from "prompt-sync";
const prompt = promptSync();

import { mostrarTareas } from "./verTareas.js";
import { buscarTareas } from "./buscarTarea.js";
import { agregarTarea } from "./agregarTarea.js";

let opcionMenu = -1;          // Guarda la opción que elige el usuario
let listaTareas = [];         // Guarda cada tarea que se crea

// Instrucciones
const instrucciones = function() {
    console.log("Ingrese una opción:");
    console.log("[1] Ver tarea");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[0] Salir");
}

// Menú principal
while(opcionMenu !== 0) {
    instrucciones();
    opcionMenu = parseInt(prompt("Ingrese una opción: "));

    switch(opcionMenu) {
        case 1: // Ver tareas
            mostrarTareas(listaTareas);
            break;

        case 2: // Buscar tareas
            buscarTareas(listaTareas);
            break;

        case 3: // Agregar tarea
            agregarTarea(listaTareas);
            break;

        case 0:
            console.log("Saliendo...");
            break;

        default:
            console.log("Opción inválida");
    }
}
