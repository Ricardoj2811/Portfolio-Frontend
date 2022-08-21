export class Experiencia {
    id? : number;
    nombreE : string;
    descripcionE : string;
    nombreEmpresaE : string;
    fechaInicioE : string;
    fechaFinalE : string;
    imagen : string;
    link: string;

    constructor(nombreE: string, descripcionE: string, nombreEmpresaE: string, fechaInicioE: string, fechaFinalE: string, imagen: string, link:string) {
        this.nombreE = nombreE;
        this.descripcionE = descripcionE;
        this.nombreEmpresaE = nombreEmpresaE;
        this.fechaInicioE = fechaInicioE;
        this.fechaFinalE = fechaFinalE;
        this.imagen = imagen;
        this.link = link;
    }

}
