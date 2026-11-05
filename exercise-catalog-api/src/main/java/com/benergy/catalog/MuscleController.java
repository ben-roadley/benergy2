package com.benergy.catalog;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/muscles")
public class MuscleController {

	private final ExerciseDefinitionRepository repository;

	public MuscleController(ExerciseDefinitionRepository repository) {
		this.repository = repository;
	}

	@GetMapping
	public List<MuscleCount> list() {
		return repository.findMuscleCounts();
	}
}
