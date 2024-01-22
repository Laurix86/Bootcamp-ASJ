package com.bootcamp.todolist.controllers;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bootcamp.todolist.models.TareaModel;
import com.bootcamp.todolist.services.TareaService;

@RestController
@RequestMapping("/tareas")
public class TareaController {

	@Autowired
	TareaService tareaService;
	
	@GetMapping("/test")
	public ResponseEntity<String> testing() {
		return ResponseEntity.ok("algo");
	}
	
	@GetMapping()
	public ResponseEntity<List<TareaModel>> getTareas() {
		return ResponseEntity.ok(tareaService.obtenerTareas());
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<Optional<TareaModel>> getTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.obtenerTareasPorId(id));
	}
	
	@PostMapping()
	public ResponseEntity<String> createTarea(@RequestBody TareaModel tarea) {
		return ResponseEntity.ok(tareaService.crearTarea(tarea));
	}
	
	@PutMapping("/hecha/{id}")
	public ResponseEntity<String> updateDoneTarea(@PathVariable int id) {
			System.out.println("llegó " + id);
			return ResponseEntity.ok(tareaService.finalizarTarea(id));
		}
	
	@PutMapping("/{id}")
	public ResponseEntity<String> updateTarea(@PathVariable int id, @RequestBody TareaModel tarea) {
		
		return ResponseEntity.ok(tareaService.modificarTarea(id, tarea));
	}
	
	
	
	@PutMapping("/borrada/{id}")
	public ResponseEntity<String> updateQuitarTarea(@PathVariable int id) {
		
		return ResponseEntity.ok(tareaService.quitarTarea(id));
	}
	
	@DeleteMapping("/{id}")
	public ResponseEntity<String> deleteTareaById(@PathVariable int id) {
		return ResponseEntity.ok(tareaService.elimiarTarea(id));
	}
	
	
	
	
}
