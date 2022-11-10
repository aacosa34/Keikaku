enum puestoTrabajo{
  Programador = "Programador",
  DesarrolladorSoftware = "Desarrollador Software",
  IngenieroDevOps = "Ingeniero DevOps",
  ExpertoSeguridad = "Experto Seguridad Informática",
  ExpertoRedes = "Experto en Redes",
  DataAnalist = "Data Analist"
}

enum nivelIdioma{
  A1 = "A1",
  A2 = "A2",
  B1 = "B1",
  B2 = "B2",
  C1 = "C1",
  C2 = "C2"
}

type Experiencia={
  [key: string]: puestoTrabajo|number;
  puesto : puestoTrabajo;
  tiempo: number;
}

type Idioma={
  [key: string]: string|nivelIdioma;
  idioma: string;
  nivel: nivelIdioma;
}

export class Curriculum{ 
  private experiencias : Experiencia[];
  private estudios : string[];
  private idiomas : Idioma[];

  constructor(exp : Experiencia[], est : string[],idiomas : Idioma[]){
    this.experiencias = exp;
    this.estudios = est;
    this.idiomas = idiomas;
  }
  
}

