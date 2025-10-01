import promptSync from "prompt-sync";
const prompt = promptSync();

import { mostrarTareas } from "./verTareas.js";
import { buscarTareas } from "./buscarTarea.js";
import { agregarTarea } from "./agregarTarea.js";
import { detallesTarea } from "./detallesTarea.js";

let opcionMenu = -1;          // Guarda la opción que elige el usuario
let estadoTarea;              // Guarda el estado de la tarea que quiere ver (P/E/T/C/A)
let numeroTarea;              // Guarda el número de tarea específica a mostrar o editar
let listaTareas = [];         // guarda las tareas

//Instrucciones
const instrucciones = function(){
    console.log("Ingrese una opcion:");
    console.log("[1] Ver tarea");
    console.log("[2] Buscar tarea");
    console.log("[3] Agregar tarea");
    console.log("[0] Salir");
}

// Opciones
while(opcionMenu != 0){
    instrucciones(); // muestra el menú
    opcionMenu = parseInt(prompt("Ingrese una opción: "));

    switch(opcionMenu){
        case 1:// ver tareas
            mostrarTareas(listaTareas);
            break;

        case 2:// buscar tarea
            buscarTareas(listaTareas);
            break;

        case 3:// agregar tarea
            agregarTarea(listaTareas);
            break;

        case 0:
            console.log("Saliendo...");
            break;

        default:
            console.log("Opción inválida");
    }
}