import { Component } from '@angular/core';
import { text } from '@fortawesome/fontawesome-svg-core';

@Component({
  selector: 'app-proyecto-uno',
  templateUrl: './proyecto-uno.component.html',
  styleUrls: ['./proyecto-uno.component.css']
})
export class ProyectoUnoComponent {
  filtro = 0;
  input_text = "";
  task: string = "";
  toDoList: List[] = [];
  seeTaskType: number = 1;

  addTask(){
    if(this.input_text !== "")
    {
      this.toDoList.push(new List(this.input_text, new Date()));
      this.input_text = "";
    }
  }

  taskDone(index: number){
    this.toDoList[index].done = (this.toDoList[index].done)?false:true;
  }

  taskDelete(index: number){
    this.toDoList[index].deleted=true;
  }

  changeSeeTaskType(option: number){
    this.seeTaskType = option;
  }

  setFilter(numFiltro: number){
    this.filtro = numFiltro;
  }

  getFilterList(){
    switch(this.filtro){
      case 0:
        return this.toDoList;
      case 1: 
        return this.toDoList.filter((elem)=> elem.done == false && elem.deleted == false);
      case 2:
        return this.toDoList.filter((elem)=> elem.done == true && elem.deleted == false);
      case 3: 
        return this.toDoList.filter((elem)=>  elem.deleted == false);
      default:
        return this.toDoList;
    }
  }
     
}


class List{
  taskText: string;
  date: Date;
  done: boolean;
  deleted: boolean;

  constructor(taskText: string, date: Date)
  {
    this.taskText = taskText;
    this.date = date;
    this.done = false;
    this.deleted = false;
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

