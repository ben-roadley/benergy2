package com.benergy.catalog;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface ExerciseDefinitionRepository extends JpaRepository<ExerciseDefinition, String> {

	/** Unnests the jsonb array so each muscle is counted per exercise that lists it. */
	@Query(nativeQuery = true, value = """
			select m.name as name, count(*) as count
			from catalog_exercisedefinition e
			cross join lateral jsonb_array_elements_text(e.primary_muscles) as m(name)
			group by m.name
			order by m.name
			""")
	List<MuscleCount> findMuscleCounts();
}
