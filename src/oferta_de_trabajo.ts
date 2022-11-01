import {Curriculum} from "./curriculum";


class Oferta{
  private nombre: string;
  private descripcion: string;
  private fechaCreacion: Date;
  private curriculums: Curriculum[];

  constructor(nombre: string, descripcion: string,fechaCreacion: Date,curriculums:Curriculum[]) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.curriculums = curriculums;
  }
}