package com.bootcamp.todolist.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.bootcamp.todolist.models.TareaModel;

public interface TareaRepository extends JpaRepository<TareaModel, Integer> {
	
	@Query(value= "SELECT t.* FROM tareas t WHERE t.estado = :estado LIMIT 2", nativeQuery = true)
	List<TareaModel> findByEstado(@Param("estado") boolean estado);
	
	
}
