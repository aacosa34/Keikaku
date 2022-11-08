interface Experiencia{
  fechaInicio: Date;
  fechaFin: Date;
  Puesto: string;
}

export class Curriculum{ 
  private experiencias : Experiencia[];

  constructor(exp : Experiencia[]){
    this.experiencias = exp;
  }
}

