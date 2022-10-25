class RecursosHumanos extends BaseData{

  private email:string;
  private password:string;

  constructor(nombre:string, apellidos:string, fechaNacimiento:Date,email:string,password:string){
    super(nombre, apellidos, fechaNacimiento);
    this.email = email;
    this.password = password;

  }
  
}

