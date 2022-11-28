import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
titulo = 'Registro de Usuarios' ;
mensaje="";
registrado=false;
nombre:string="";
apellido:string="";
cargo:string="";
entradas: any[];


constructor(){
  this.entradas=[
    {titulo:"python cada dia mas presente"},
    {titulo:"Java presente desde hace 20 años"},
    {titulo:"JavaScript cada vez mas funcional"},
    {titulo:"Kotlin potencia para tus apps"},
    {titulo :"¿donde quedo pascal?"},

  ]
}



registrarUsuario(){

  this.registrado=true;

this.mensaje="usuario registrado con éxito"

}


}
