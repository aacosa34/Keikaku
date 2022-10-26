import {Curriculum} from "./curriculum";

enum puesto{
  Emplado = "empleado",
  JefeSeccion = "jefeSeccion",
  Encargado = "encargado"
};

class Oferta{
  private puesto: puesto;
  private nombre: string;
  private descripcion: string;
  private fechaCreacion: Date;
  private curriculums: Curriculum[];

  constructor(puesto: puesto, nombre: string, descripcion: string,fechaCreacion: Date,curriculums:Curriculum[]) {
    this.puesto = puesto;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.fechaCreacion = fechaCreacion;
    this.curriculums = curriculums;
  }
}