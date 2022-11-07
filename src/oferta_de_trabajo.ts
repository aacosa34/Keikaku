import {Curriculum,nivelEstudios,nivelIngles} from "./curriculum";


class Oferta{

  
  private requisitosMinimos: Curriculum;
  private curriculums: Curriculum[];

  constructor(curriculums:Curriculum[],ingles:nivelIngles,estudios:nivelEstudios,aptitudes:string[],experiencia:string) {
    this.requisitosMinimos = new Curriculum(ingles,estudios,aptitudes,experiencia);
    this.curriculums = curriculums;
  }
  
}