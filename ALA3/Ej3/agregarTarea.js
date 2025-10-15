import promptSync from "prompt-sync";
const prompt = promptSync();

import { Tarea } from "./Tarea.js"; // Importamos el constructor/prototipo

export function agregarTarea(listaTareas) {
    console.log("\n===== CREAR UNA NUEVA TAREA =====");

    // 1. Título
    let titulo = "";
    while(titulo.trim() === "" || titulo.length > 100) {
        titulo = prompt("1. Ingresa el Título (max 100 caracteres): ").trim();
        if(titulo === "") {
            console.log("⚠️ El título no puede estar vacío.");
        } else if(titulo.length > 100) {
            console.log("⚠️ El título no puede tener más de 100 caracteres.");
        }
    }

    // 2. Descripción
    let descripcion = "";
    while(true) {
        descripcion = prompt("2. Ingresa la descripción (opcional, max 500 caracteres): ").trim();
        if(descripcion === "") {
            descripcion = "Sin descripción";
            break;
        } else if(descripcion.length <= 500) {
            break;
        } else {
            console.log("⚠️ La descripción no puede tener más de 500 caracteres.");
        }
    }

    // 3. Estado
    let estado = "";
    while(!["P", "E", "T", "C"].includes(estado)) {
        estado = prompt("3. Estado ([P] Pendiente / [E] En curso / [T] Terminada / [C] Cancelada): ").toUpperCase();
        if(!["P", "E", "T", "C"].includes(estado)) {
            console.log("Estado inválido. Usa P, E, T o C.");
        }
    }

    // 4. Dificultad
    let dificultad = "";
    while(!["1","2","3"].includes(dificultad)) {
        dificultad = prompt("4. Dificultad ([1] Fácil / [2] Media / [3] Difícil): ");
        if(!["1","2","3"].includes(dificultad)) {
            console.log("Dificultad inválida. Usa 1, 2 o 3.");
        }
    }

    // 5. Vencimiento
    let fechaVencimiento = "";
    const hoy = new Date();
    hoy.setHours(0,0,0,0);

    while(true) {
        fechaVencimiento = prompt("5. Ingresa la fecha de vencimiento (AAAA-MM-DD, opcional): ").trim();
        if(fechaVencimiento === "") {
            fechaVencimiento = "Sin fecha";
            break;
        }

        const fechaIngresada = new Date(fechaVencimiento);
        if(isNaN(fechaIngresada)) {
            console.log("⚠️ Fecha inválida. Usa formato AAAA-MM-DD.");
        } else if(fechaIngresada < hoy) {
            console.log("⚠️ La fecha de vencimiento no puede ser anterior a hoy.");
        } else {
            break;
        }
    }

    // Fecha de creación automática
    const fechaCreacion = new Date().toISOString().split("T")[0]; 

    // Crear una nueva instancia de Tarea
    const nuevaTarea = new Tarea(titulo, descripcion, estado, dificultad, fechaVencimiento, fechaCreacion);

    // Agregar a la lista
    listaTareas.push(nuevaTarea);

    console.log("\n¡Datos guardados!");
    prompt("Presiona cualquier tecla para continuar...");
}
