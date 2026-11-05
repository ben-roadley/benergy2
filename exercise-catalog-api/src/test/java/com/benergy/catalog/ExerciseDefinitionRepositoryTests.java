package com.benergy.catalog;

import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.data.jpa.test.autoconfigure.DataJpaTest;
import org.springframework.boot.jdbc.test.autoconfigure.AutoConfigureTestDatabase;

/** Runs against the compose Postgres (Django must have loaded the catalog). Read-only. */
@DataJpaTest
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class ExerciseDefinitionRepositoryTests {

	@Autowired
	private ExerciseDefinitionRepository repository;

	@Test
	void mapsAllColumnsIncludingJsonbArrays() {
		ExerciseDefinition exercise = repository.findById("3_4_Sit-Up").orElseThrow();

		assertThat(exercise.getName()).isEqualTo("3/4 Sit-Up");
		assertThat(exercise.getCategory()).isEqualTo("strength");
		assertThat(exercise.getForce()).isEqualTo("pull");
		assertThat(exercise.getLevel()).isEqualTo("beginner");
		assertThat(exercise.getMechanic()).isEqualTo("compound");
		assertThat(exercise.getEquipment()).isEqualTo("body only");
		assertThat(exercise.getPrimaryMuscles()).containsExactly("abdominals");
		assertThat(exercise.getSecondaryMuscles()).isNotNull();
		assertThat(exercise.getInstructions()).isNotEmpty();
		assertThat(exercise.getImages()).containsExactly("3_4_Sit-Up/0.jpg", "3_4_Sit-Up/1.jpg");
	}

	@Test
	void mapsNullableColumnsToNull() {
		ExerciseDefinition exercise = repository.findById("90_90_Hamstring").orElseThrow();

		assertThat(exercise.getMechanic()).isNull();
	}

	@Test
	void slugLookupIsCaseSensitive() {
		assertThat(repository.findById("3_4_sit-up")).isEmpty();
	}

	@Test
	void muscleCountsAreUniqueSortedAndAddUpToTheCatalog() {
		List<MuscleCount> muscles = repository.findMuscleCounts();
		List<String> names = muscles.stream().map(MuscleCount::name).toList();

		assertThat(names).isNotEmpty().doesNotHaveDuplicates().isSorted().contains("quadriceps");
		assertThat(muscles.stream().mapToLong(MuscleCount::count).sum()).isEqualTo(repository.count());
	}
}
