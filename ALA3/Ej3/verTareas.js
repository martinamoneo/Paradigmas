import promptSync from "prompt-sync";
const prompt = promptSync();

const nombresEstados = {
    P: "Pendiente",
    E: "En curso",
    T: "Terminada",
    C: "Cancelada"
};

// Función que muestra las tareas
export function mostrarTareas(listaTareas) {
    if (listaTareas.length === 0) {
        console.log("\nNo hay tareas.");
        return;
    }

    let opcion = "";

    while (opcion !== "V") {
        console.log("\n===== VER TAREAS =====");
        console.log("[P] Pendientes");
        console.log("[E] En curso");
        console.log("[T] Terminadas");
        console.log("[C] Canceladas");
        console.log("[A] Todas");
        console.log("[V] Volver");

        opcion = prompt("Ingrese su elección: ").toUpperCase();

        switch (opcion) {
            case "P":
            case "E":
            case "T":
            case "C":
            case "A":
                const tareasFiltradas = listaTareas.filter(t => opcion === "A" || t.estado === opcion);

                if (tareasFiltradas.length === 0) {
                    console.log("\nNo hay tareas con ese estado.");
                } else {
                    console.log("\nTareas:");
                    tareasFiltradas.forEach((t, i) => {
                        console.log(`[${i + 1}] ${t.titulo}`);
                    });

                    let numTarea = -1;
                    while (numTarea !== 0) {
                        numTarea = parseInt(prompt("\n¿Deseas ver los detalles de alguna?\nIntroduce el número para verla o 0 para volver: "));

                        if (numTarea === 0) break;

                        if (numTarea > 0 && numTarea <= tareasFiltradas.length) {
                            const tareaSeleccionada = tareasFiltradas[numTarea - 1];
                            // Llamamos al método del prototipo
                            tareaSeleccionada.mostrarDetalles();
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
