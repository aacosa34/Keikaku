interface Experiencia{
  fechaInicio: Date;
  fechaFin: Date;
  Puesto: string;
}

interface Estudio{
  fechaInicio: Date;
  fechaFin: Date;
  estudio: string;
}

interface Idioma{
  idioma : string;
  nivel : string;
}

export class Curriculum{ 
  private experiencias : Experiencia[];
  private estudios : Estudio[];
  private idiomas : Idioma[];

  constructor(exp : Experiencia[], est : Estudio[],idiomas : Idioma[]){
    this.experiencias = exp;
    this.estudios = est;
    this.idiomas =idiomas;
  }
  
}

