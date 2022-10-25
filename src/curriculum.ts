enum nivelIngles {A1,A2,B1,B2,C1,C2};
enum nivelEstudios {Primara,Secundaria,Bachillerato,FP,Grado,Master}

class Curriculum extends BaseData{

  private palabrasClave: string[];
  private ingles:nivelIngles;
  private estudios:nivelEstudios;

  constructor(nombre:string,apellidos:string,fechaNacimiento:Date,palabrasClave:string[],ingles:nivelIngles,estudios:nivelEstudios){
    super(nombre,apellidos,fechaNacimiento);
    this.palabrasClave = palabrasClave;
    this.ingles = ingles;
    this.estudios = estudios;
  }

}