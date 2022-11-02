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
  
  private carnetConducir:boolean;
  private ingles:nivelIngles;
  private estudios:nivelEstudios;
  private aptitudes:string[];

  constructor(carnetConducir:boolean,ingles:nivelIngles,estudios:nivelEstudios,aptitudes:string[]){
    this.ingles = ingles;
    this.estudios = estudios;
    this.carnetConducir = carnetConducir;
    this.aptitudes = aptitudes;
  }

}
