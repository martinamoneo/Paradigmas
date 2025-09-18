// Importamos prompt-sync
import promptSync from "prompt-sync";
const prompt = promptSync();

// Menú de opciones
function menu() {
    console.log("===== CALCULADORA =====");
    console.log("[1] Suma");
    console.log("[2] Resta");
    console.log("[3] Multiplicación");
    console.log("[4] División");
    console.log("[0] Salir");
}

// Programa principal
let opcion;

do {
    menu();
    opcion = parseInt(prompt("Elija una opción: "));

    let num, resultado;

    switch (opcion) {
        case 1: // SUMA
            resultado = 0;
            console.log("Ingrese números para sumar (cualquier letra para terminar):");
            while (true) {
                num = parseFloat(prompt("> "));
                if (isNaN(num)) break; // corta si no es número
                resultado += num;
            }
            console.log("Resultado de la suma:", resultado);
            break;

        case 2: // RESTA
            resultado = null;
            console.log("Ingrese números para restar (cualquier letra para terminar):");
            while (true) {
                num = parseFloat(prompt("> "));
                if (isNaN(num)) break;
                if (resultado === null) {
                    resultado = num; // primer número
                } else {
                    resultado -= num;
                }
            }
            console.log("Resultado de la resta:", resultado);
            break;

        case 3: // MULTIPLICACIÓN
            resultado = 1;
            console.log("Ingrese números para multiplicar (cualquier letra para terminar):");
            while (true) {
                num = parseFloat(prompt("> "));
                if (isNaN(num)) break;
                resultado *= num;
            }
            console.log("Resultado de la multiplicación:", resultado);
            break;

        case 4: // DIVISIÓN
            resultado = null;
            console.log("Ingrese números para dividir (cualquier letra para terminar):");
            while (true) {
                num = parseFloat(prompt("> "));
                if (isNaN(num)) break;
                if (resultado === null) {
                    resultado = num; // primer número
                } else {
                    resultado /= num;
                }
            }
            console.log("Resultado de la división:", resultado);
            break;

        case 0:
            console.log("¡Hasta luego!");
            break;

        default:
            console.log("Opción no válida, intente de nuevo.");
    }

    console.log(""); // salto de línea
} while (opcion !== 0);
