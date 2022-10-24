"use strict";
class RecursosHumanos {
    constructor(nombre, apellidos, fecha_nacimiento, email, password) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.fecha_nacimiento = fecha_nacimiento;
        this.email = email;
        this.password = password;
    }
}
let fecha = new Date("1997-10-03");
console.log(fecha.getDate());
