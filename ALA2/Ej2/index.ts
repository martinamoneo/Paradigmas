import promptSync from "prompt-sync";
const prompt = promptSync();

import { mostrarTareas } from "./verTareas.js";
import { buscarTareas } from "./buscarTarea.js";
import { agregarTarea } from "./agregarTarea.js";

import { Tarea } from "./Tarea"; // importamos tarea

let opcionMenu: number = -1;
let listaTareas: Tarea[] = []; // arreglo de tareas

const instrucciones = function(): void { // void porq no devuelve nada
  console.log("Ingrese una opcion:");
  console.log("[1] Ver tarea");
  console.log("[2] Buscar tarea");
  console.log("[3] Agregar tarea");
  console.log("[0] Salir");
}

while(opcionMenu != 0){
  instrucciones(); 
  opcionMenu = parseInt(prompt("Ingrese una opción: "));

  switch(opcionMenu){
    case 1:
      mostrarTareas(listaTareas);
      break;

    case 2:
      buscarTareas(listaTareas);
      break;

    case 3:
      agregarTarea(listaTareas);
      break;

    case 0:
      console.log("Saliendo...");
      break;

    default:
      console.log("Opción inválida");
  }
}
