import promptSync from "prompt-sync";
import { Calculadora } from "./calculadora.js";

const prompt = promptSync({ sigint: true });
const calc = new Calculadora();

function menu(): void {
  console.log("===== CALCULADORA =====");
  console.log("[1] Suma");
  console.log("[2] Resta");
  console.log("[3] Multiplicación");
  console.log("[4] División");
  console.log("[0] Salir");
}

let opcion: number;

do {
  menu();
  opcion = parseInt(prompt("Elija una opción: "));

  switch (opcion) {
    case 1:
      calc.sumar();
      break;
    case 2:
      calc.restar();
      break;
    case 3:
      calc.multiplicar();
      break;
    case 4:
      calc.dividir();
      break;
    case 0:
      console.log("¡Hasta luego!");
      break;
    default:
      console.log("Opción no válida.");
  }

  console.log("");
} while (opcion !== 0);
