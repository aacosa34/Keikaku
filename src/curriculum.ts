export enum nivelIngles {
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2"
};


export enum nivelEstudios {
  Primaria = "primaria",
  Secundaria = "secundaria",
  Bachillerato = "bachillerato",
  FP = "fp",
  Grado = "grado",
  Master = "master"
};



export class Curriculum{
  
  private ingles:nivelIngles;
  private estudios:nivelEstudios;
  private aptitudes:string[];
  private experiencia:number;


  constructor(ingles:nivelIngles,estudios:nivelEstudios,aptitudes:string[],experiencia:string){
    this.ingles = ingles;
    this.estudios = estudios;
    this.aptitudes = aptitudes;
    this.experiencia = this.obtenerExperiencia(experiencia);
  }

  obtenerExperiencia(experiencia:string):number {
    if((Number(experiencia) >=0) && (Number(experiencia)<35)){
      return Number(experiencia);
    }else{
      throw new Error("Valor de experiencia no válido");
    }
  }

  getExperiencia():number {
    return this.experiencia;
  }

  getAptitudes():string[]{
    return this.aptitudes;
  }

  getEstudios():nivelEstudios{
    return this.estudios;
  }

  getIngles():nivelIngles{
    return this.ingles;
  }
  

}

