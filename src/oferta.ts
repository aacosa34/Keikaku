import { Curriculum, puestoTrabajo, Idioma, nivelIdioma, Experiencia } from "./curriculum";
import { readFileSync } from 'fs';

export class Oferta{
  private curriculums: Curriculum[];
  private requerimientosMinimos: Curriculum;

  constructor(csvPath: string = 'data/data.csv' , requisitos: Curriculum = new Curriculum([],[],[])){
    let cvs : Curriculum[];
    const csvData = readFileSync(csvPath, 'utf8');
    const data = csvData.split('\n');
    // Eliminamos la primera fila (cabecera) y la ultima (fila vacia)
    data.shift()
    data.splice(-1, 1)
    // Para cada fila, asigmanos los valores a las variables correspondientes
    cvs = data.map((row) => {
      let [experiencias, anyos, idiomas, niveles, estudios] = row.split(',');
      const arrayExp = experiencias.split(';');
      const arrayAnyosExp = anyos.split(';');
      const arrayIdiomas = idiomas.split(';');
      const arrayNiveles = niveles.split(';');
      const arrayEstudios = estudios.split(';');

      const exp = arrayExp.map((puesto, index) => {
        let value : Experiencia = { puesto: puesto as puestoTrabajo, tiempo: parseInt(arrayAnyosExp[index]) };
        return value;
      })

      const lang = arrayIdiomas.map((idioma, index) => {
        let value : Idioma = { idioma: idioma, nivel: arrayNiveles[index] as nivelIdioma }
        return value;
      })

      return new Curriculum(exp, arrayEstudios, lang);
    })
    this.curriculums = cvs;
    this.requerimientosMinimos = requisitos;
  }

  getCurriculums(): Curriculum[]{
    return this.curriculums;
  }

}