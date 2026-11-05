package com.benergy.catalog;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

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

	@Query(nativeQuery = true, value = """
			select slug, name, category, equipment, level
			from catalog_exercisedefinition
			order by name, slug
			""")
	List<ExerciseSummary> findAllSummaries();

	/** The muscle is a bound parameter; jsonb_build_array wraps it so no JSON is built by hand. */
	@Query(nativeQuery = true, value = """
			select slug, name, category, equipment, level
			from catalog_exercisedefinition
			where primary_muscles @> jsonb_build_array(cast(:muscle as text))
			order by name, slug
			""")
	List<ExerciseSummary> findSummariesByPrimaryMuscle(@Param("muscle") String muscle);
}
