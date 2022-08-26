export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    descripcion: string;
    carrera: string;
    carreraDos: string;
    linkedIn: string;
    gitHub : string;
    correo: string;


    constructor(nombre: String, apellido: String, img: String, descripcion: string, carrera: string, carreraDos: string, linkedIn: string, gitHub: string, correo: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.descripcion = descripcion;
        this.carrera = carrera;
        this.carreraDos = carreraDos;
        this.linkedIn = linkedIn;
        this.gitHub = gitHub;
        this.correo;
    }
}