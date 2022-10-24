class RecursosHumanos{

  private nombre:string;
  private apellidos:string;
  private fechaNacimiento:Date; // Se puede crear un Date con var = new Date("YYYY-MM-DD"). Para mostralo por pantalla puedes usar var.toDateString().
  private email:string;
  private password:string;

  constructor(nombre:string, apellidos:string, fechaNacimiento:Date,email:string,password:string){
    this.nombre = nombre;
    this.apellidos = apellidos;
    this.fechaNacimiento = fechaNacimiento;
    this.email = email;
    this.password = password;
  }
  
}

