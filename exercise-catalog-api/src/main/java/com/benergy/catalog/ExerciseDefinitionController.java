package com.benergy.catalog;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.server.ResponseStatusException;

@RestController
@RequestMapping("/exercise-definitions")
public class ExerciseDefinitionController {

	private final ExerciseDefinitionRepository repository;

	public ExerciseDefinitionController(ExerciseDefinitionRepository repository) {
		this.repository = repository;
	}

	// The explicit name is needed: the SNAKE_CASE setting only affects JSON, not query parameters
	@GetMapping
	public List<ExerciseSummary> list(@RequestParam(name = "primary_muscle", required = false) String primaryMuscle) {
		return primaryMuscle == null
				? repository.findAllSummaries()
				: repository.findSummariesByPrimaryMuscle(primaryMuscle);
	}

	@GetMapping("/{slug}")
	public ExerciseDefinition getBySlug(@PathVariable String slug) {
		return repository.findById(slug)
				.orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,
						"Exercise definition '" + slug + "' not found"));
	}
}
