export class Skills {
    id? : number;
    nombreSk : string;
    percentSk : number;
    imagenSk : string;

    constructor(nombreSk: string, percentSk: number, imagenSk: string) {
        this.nombreSk = nombreSk;
        this.percentSk = percentSk;
        this.imagenSk = imagenSk;
    }
}
