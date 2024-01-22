import { Component, OnInit } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';
import { TodolistService } from 'src/app/services/todolist.service';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrls: ['./proyecto-uno.component.css']
})
export class ProyectoUnoComponent implements OnInit{

 // todoList: any =[];

  constructor(public listaServicio: TodolistService){ 
    this.listaServicio;
  }
  
    ngOnInit(): void{
      this.getTasks();
    }

  filtro = 0;
  input_text = "";
  task: string = "";
  toDoList: List[] = [];
  seeTaskType: number = 1;

  getTasks(){
      this.listaServicio.getLista().subscribe((data) =>{
      //console.log(JSON.stringify(data));
      this.toDoList = data;
      //console.log(this.todoList);
    });
  }

  addTask(){
    if(this.input_text !== "")
    {
      let auxTodo = new List(this.input_text,this.input_text, new Date(), false, false);
      this.listaServicio.createTarea(auxTodo).subscribe(()=>{
        this.getTasks();
      });
      //this.toDoList.push(new List(this.input_text, new Date()));
      this.input_text = "";
    }
  }

  taskDone(index: number | undefined){

   
    if(index != null){
      
      this.listaServicio.doneTarea(index).subscribe(()=>{
        this.getTasks();
      });
      //this.toDoList[index].done = (this.toDoList[index].done)?false:true;
    }
    
  }

  taskDelete(index: number | undefined){
    if(index != null){
      this.listaServicio.deleteTarea(index).subscribe(()=>{
        this.getTasks();
      });
    }
  }

  changeSeeTaskType(option: number){
    this.seeTaskType = option;
  }

  setFilter(numFiltro: number){
    this.filtro = numFiltro;
  }

  getFilterList(){
    this.toDoList.map(elem => console.log(elem));

    switch(this.filtro){
      case 0:
        return this.toDoList;
      case 1: 
      
        return this.toDoList.filter((elem)=> elem.done == false && elem.deleted == false);
      case 2:
        return this.toDoList.filter((elem)=> elem.done == true && elem.deleted == false);
      case 3: 
        return this.toDoList.filter((elem)=>  elem.deleted == true);
      default:
        return this.toDoList;
    }
  }
     
}


class List{
  id?: number;
  nombre: string;
  descripcion: string;
  fecha: Date;
  done: boolean;
  deleted: boolean;

  constructor( taskTitle: string, taskDesc: string, date: Date, done: boolean, deleted: boolean)
  {
    //this.id = id;
    this.nombre = taskTitle;
    this.descripcion = taskDesc;
    this.fecha = date;
    this.done = done;
    this.deleted = deleted;
  }
}


  /* input_text = "";
  lista: string [] = [];
  
  agregarTarea(){
    this.lista.push(this.input_text.toUpperCase());
    this.input_text = "";
  };
  borrar(indice:number){
    this.lista.slice(indice,1);
  }
 */

