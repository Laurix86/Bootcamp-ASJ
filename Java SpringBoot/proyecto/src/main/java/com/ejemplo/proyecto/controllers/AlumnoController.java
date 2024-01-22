package com.ejemplo.proyecto.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.ejemplo.proyecto.models.Alumno;

@RestController
public class AlumnoController {
	
	List<Alumno> alumnos = new ArrayList<Alumno>(
			List.of(new Alumno(1,"Bob", "Patiño", 9.5),
					new Alumno(2,"Moe", "Sczyslak", 4),
					new Alumno(3,"Troy", "McLure", 2.6),
					new Alumno(4,"Edna", "Krabaples", 8.7))
			);
	
	@GetMapping("/alumnos")
	public List<Alumno> listPersonas() {
		return this.alumnos;
	}
	
	@GetMapping("/alumnos/{id}")
	public Alumno getAlumnoById(@PathVariable int id) {
		
		for(Alumno alumno: alumnos) {
			if(alumno.getId()== id) {
				return alumno;
			}
		}
		return null;
		
	}
	
	@DeleteMapping("/alumnos/{id}")
	public String deleteAlumnoById(@PathVariable int id) {
		for(Alumno alumno: alumnos) {
			if(alumno.getId()== id) {
				alumnos.remove(alumno);
				return "Eliminado el Alumno "+id;
			}
		}
		
		return "No funcionó";
	}
	
	@PostMapping("/alumno")
	public List<Alumno> saveAlumno(@RequestBody Alumno al) {
		
		alumnos.addLast(al);
		
		return this.alumnos;
	}
	
	@PostMapping("/alumnos") 
	public List<Alumno> saveAlumno(@RequestBody List<Alumno>  al) {
		
		alumnos.addAll(al);
		
		return this.alumnos;
	}
	
	@PutMapping("alumno/{id}") 
	public Alumno updateAlumno(@PathVariable int id, @RequestBody Alumno alumno) { 
		for (Alumno alum : alumnos) { 
			if(alum.getId() == id) { 
				alum.setNombre(alumno.getNombre());
				alum.setApellido(alumno.getApellido());
				alum.setNota(alumno.getNota());
				return alumno; 
			} 
		} return null;
	}
	
	
}
