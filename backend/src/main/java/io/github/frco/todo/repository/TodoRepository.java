package io.github.frco.todo.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import io.github.frco.todo.model.Todo;


public interface TodoRepository extends JpaRepository<Todo, Long>{

}
