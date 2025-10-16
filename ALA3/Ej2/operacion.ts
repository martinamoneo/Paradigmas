// Clase base para todas las operaciones
class Operacion {
    resultado: number | null; // puede ser número o null

    constructor() {
        this.resultado = 0; // inicializamos el resultado en 0
    }

    mostrarResultado(): void {
        console.log("Resultado:", this.resultado);
    }
}

export { Operacion };
