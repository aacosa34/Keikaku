import { Curriculum } from "./curriculum";

export class Oferta{
  private curriculums: Curriculum[];
  private requerimientosMinimos: Curriculum;

  constructor(curriculums : Curriculum[] , requisitos : Curriculum){
    this.curriculums = curriculums;
    this.requerimientosMinimos = requisitos;
  }

}