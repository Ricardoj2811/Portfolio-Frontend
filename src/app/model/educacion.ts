export class Educacion {
    id? : number;
    nombreEd : string;
    descripcionEd : string;
    nombreInstitutoEd : string;
    fechaInicioEd : string;
    fechaFinalEd : string;
    imagenEd : string;
    linkEd: string;

    constructor(nombreEd: string, descripcionEd: string, nombreInstitutoEd: string, fechaInicioEd: string, fechaFinalEd: string, imagenEd: string, linkEd:string) {
        this.nombreEd = nombreEd;
        this.descripcionEd = descripcionEd;
        this.nombreInstitutoEd = nombreInstitutoEd;
        this.fechaInicioEd = fechaInicioEd;
        this.fechaFinalEd = fechaFinalEd;
        this.imagenEd = imagenEd;
        this.linkEd = linkEd;
    }
}
