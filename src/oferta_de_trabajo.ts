import {Curriculum} from "./curriculum";


class Oferta{

  /* Las palabrasClave son los requisitos mínimos que debe tener un currículum para no ser eliminado del sistema */
  private palabrasClave: string[];
  private curriculums: Curriculum[];

  constructor(curriculums:Curriculum[],palabrasClave: string[]) {
    this.curriculums = curriculums;
    this.palabrasClave = palabrasClave;
  }
}