import { Operacion } from "./operacion.js";
import promptSync from "prompt-sync";
const prompt = promptSync({ sigint: true });

class Calculadora extends Operacion {
  constructor() {
    super();
  }

  // SUMA
  sumar(): void {
    this.resultado = 0;
    console.log("Ingrese números para sumar (cualquier letra para terminar):");
    while (true) {
      const num = parseFloat(prompt("> "));
      if (isNaN(num)) break;
      this.resultado += num;
    }
    this.mostrarResultado();
  }

  // RESTA
  restar(): void {
    this.resultado = null;
    console.log("Ingrese números para restar (cualquier letra para terminar):");
    while (true) {
      const num = parseFloat(prompt("> "));
      if (isNaN(num)) break;
      if (this.resultado === null) this.resultado = num;
      else this.resultado -= num;
    }
    this.mostrarResultado();
  }

  // MULTIPLICACIÓN
  multiplicar(): void {
    this.resultado = 1;
    console.log("Ingrese números para multiplicar (cualquier letra para terminar):");
    while (true) {
      const num = parseFloat(prompt("> "));
      if (isNaN(num)) break;
      this.resultado *= num;
    }
    this.mostrarResultado();
  }

  // DIVISIÓN
  dividir(): void {
    this.resultado = null;
    console.log("Ingrese números para dividir (cualquier letra para terminar):");
    while (true) {
      const num = parseFloat(prompt("> "));
      if (isNaN(num)) break;
      if (this.resultado === null) this.resultado = num;
      else this.resultado /= num;
    }
    this.mostrarResultado();
  }
}

export { Calculadora };
