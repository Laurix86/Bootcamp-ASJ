package com.bootcamp.todolist.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.repositories.TareaRepository;

@Service
public class TareaService {
	
	//inyección de dependencia (conecta)
	@Autowired
	TareaRepository tareaRepository;
	
	//obtener tareas
	public List<TareaModel> obtenerTareas(){
		return tareaRepository.findAll();
	}
	
	
	// obtener tarea según ID
	public Optional<TareaModel> obtenerTareasPorId(int id) {
		return tareaRepository.findById(id);
	}
	
	
	//insertar tarea
	public String crearTarea(TareaModel tarea) {
		tareaRepository.save(tarea);
		return "Tarea insertada correctamente";
	}
	
	
	// modificar tarea
	public String modificarTarea(int id, TareaModel tarea) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setNombre(tarea.getNombre());
			t.setDescripcion(tarea.getDescripcion());
			tareaRepository.save(t);
			return "Tarea #"+ id + " modificada correctamente";
		}
		
		return "Error";
	}
	
	public String finalizarTarea(int id) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setDone(!t.isDone());
			tareaRepository.save(t);
			return "Tarea #"+ id + " finalizada";
		}
		
		return "Error";
	}
	
	public String quitarTarea(int id) {
		TareaModel t = tareaRepository.findById(id).get();
		if(t != null) {
			t.setDeleted(true);
			tareaRepository.save(t);
			return "Tarea #"+ id + " eliminada";
		}
		
		return "Error";
	}
	
	
	//eliminar tarea
	public String elimiarTarea(int id) {
		tareaRepository.deleteById(id);
		return "Tarea eliminada correctamente";
	}
}
