import {Curriculum,nivelEstudios,nivelIngles} from "./curriculum";


class Oferta{

  
  private requisitosMinimos: Curriculum;
  private curriculums: Curriculum[];

  constructor(curriculums:Curriculum[],carnetConducir:boolean,ingles:nivelIngles,estudios:nivelEstudios,aptitudes:string[],experiencia:string) {
    this.requisitosMinimos = new Curriculum(carnetConducir,ingles,estudios,aptitudes,experiencia);
    this.curriculums = curriculums;
  }
}