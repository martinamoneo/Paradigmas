// Clase base para todas las operaciones
class Operacion {
    constructor() {
        this.resultado = 0; // inicializamos el resultado en 0
    }
    mostrarResultado() {
        console.log("Resultado:", this.resultado);
    }
}
export { Operacion };
