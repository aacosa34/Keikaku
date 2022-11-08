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

export class Curriculum{ 
  private experiencias : Experiencia[];
  private estudios : Estudio[];

  constructor(exp : Experiencia[], est : Estudio[]){
    this.experiencias = exp;
    this.estudios = est;
  }
}

