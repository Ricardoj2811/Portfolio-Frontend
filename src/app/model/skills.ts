export class Skills {
    id? : number;
    nombreSk : string;
    imagenSk : string;
    percentSk : number;
    

    constructor(nombreSk: string, imagenSk: string, percentSk: number) {
        this.nombreSk = nombreSk;
        this.imagenSk = imagenSk;
        this.percentSk = percentSk;
    }
}
