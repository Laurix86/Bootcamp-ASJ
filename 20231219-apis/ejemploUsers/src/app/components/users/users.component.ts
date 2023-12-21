import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit{
  constructor(public usersService: UsersService){}
  usuarios : any = [];
  mensaje = "";

  ngOnInit(): void{
    this.list();
  }

  resetForm(form: NgForm){
    form.reset();
    this.usersService.datosUsuario = {
      id: -1};
    setTimeout(()=>{
        this.mensaje = "";
      },2500);
  }

  //Lista de usuarios
  list(){
    this.usersService.getUsers().subscribe((res) => {
     
      this.usuarios = res.data;
    });
  }

  //NuevoUsuario
  create(form: NgForm){
    if(form.value.id != -1){
      //modificar usuario
      this.usersService.updateUser(form.value).subscribe(
        (res)=>{
          console.log("Respuesta del PUT ",res),
          this.mensaje = 'Usuario actualizado correctamente';
          this.resetForm(form);
          this.list();
         
        });
    }else{
      //crear usuario
       //validación
      if(!form.valid){
        console.log("Formulario inválido");
        return;
      }else{
        const usu={
          name: form.value.name,
          job: form.value.job
        };
        this.usersService.createUser(usu).subscribe((res)=> {
          console.log(res);
          this.mensaje = "Usuario creado correctamente";
          this.resetForm(form);
          this.list();
         
        });
      }
    }
   
  }

    delete(id:any){
      let confirmacion = confirm("¿Desea eliminar el Usuario #" + id+"?");
      if(confirmacion){
        this.usersService.deleteUser(id).subscribe(
          (res)=>{
            console.log("Respuesta de eliminar", res);
            this.list();
          }
        )
      }
    }
  
    update(usu:any){
      this.usersService.datosUsuario = {
        id: usu.id,
        name: usu.first_name,
        job: 'Astrofísico',
      };
    }
  
  
  }
  


