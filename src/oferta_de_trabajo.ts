import {Curriculum} from "./curriculum";

enum Puesto{
  Emplado = "empleado",
  JefeSeccion = "jefeSeccion",
  Encargado = "encargado"
};

class Oferta{
  private puesto: Puesto;
  private nombre: string;
  private descripcion: string;
  private fechaCreacion: Date;
  private curriculums: Curriculum[];

  constructor(puesto: Puesto, nombre: string, descripcion: string,fechaCreacion: Date,curriculums:Curriculum[]) {
    this.puesto = puesto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.curriculums = curriculums;
  }
}