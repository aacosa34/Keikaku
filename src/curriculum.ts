enum nivelIngles {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2"
};


enum nivelEstudios {
  Primaria = "primaria",
  Secundaria = "secundaria",
  Bachillerato = "bachillerato",
  FP = "fp",
  Grado = "grado",
  Master = "master"
};

export class Curriculum{

  private nombre: string;
  private apellidos: string;
  private fechaNacimiento: Date;
  private palabrasClave: string[];
  private ingles:nivelIngles;
  private estudios:nivelEstudios;

  constructor(nombre:string,apellidos:string,fechaNacimiento:Date,palabrasClave:string[],ingles:nivelIngles,estudios:nivelEstudios){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.palabrasClave = palabrasClave;
    this.ingles = ingles;
    this.estudios = estudios;
  }

}
