import { Curriculum } from "./curriculum";

class Oferta{
  private curriculums: Curriculum[];
  private requerimientosMinimos: Curriculum;

  constructor(curriculums : Curriculum[] , requisitos : Curriculum){
    this.curriculums = curriculums;
    this.requerimientosMinimos = requisitos;
  }

}