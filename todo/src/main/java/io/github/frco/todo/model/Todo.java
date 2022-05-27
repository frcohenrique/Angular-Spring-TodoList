package io.github.frco.todo.model;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.PrePersist;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Todo {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	@Column
	private String description; 
	@Column
	private Boolean done;
	@Column
	private LocalDateTime createdAt;
	@Column
	private LocalDateTime endedAt;
	
	@PrePersist
	public void beforeSaving() {
		setCreatedAt(LocalDateTime.now());
	}
}
