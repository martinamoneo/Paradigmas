export type Tarea = {
    titulo: string;
    descripcion: string;
    estado: "P" | "E" | "T" | "C";
    dificultad: "1" | "2" | "3";
    fechaVencimiento: string;
    fechaCreacion: string;
};