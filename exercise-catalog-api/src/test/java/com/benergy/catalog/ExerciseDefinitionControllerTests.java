package com.benergy.catalog;

import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.never;
import static org.mockito.Mockito.verify;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;
import java.util.Optional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.http.MediaType;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(ExerciseDefinitionController.class)
class ExerciseDefinitionControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@MockitoBean
	private ExerciseDefinitionRepository repository;

	@Test
	void returnsExerciseWithSnakeCaseFields() throws Exception {
		given(repository.findById("3_4_Sit-Up")).willReturn(Optional.of(new ExerciseDefinition(
				"3_4_Sit-Up", "3/4 Sit-Up", "strength", "pull", "beginner", "compound", "body only",
				List.of("abdominals"), List.of(), List.of("Lie down on the floor."),
				List.of("3_4_Sit-Up/0.jpg", "3_4_Sit-Up/1.jpg"))));

		mockMvc.perform(get("/exercise-definitions/3_4_Sit-Up"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.slug").value("3_4_Sit-Up"))
				.andExpect(jsonPath("$.name").value("3/4 Sit-Up"))
				.andExpect(jsonPath("$.force").value("pull"))
				.andExpect(jsonPath("$.primary_muscles[0]").value("abdominals"))
				.andExpect(jsonPath("$.secondary_muscles").isEmpty())
				.andExpect(jsonPath("$.instructions[0]").value("Lie down on the floor."))
				.andExpect(jsonPath("$.images[1]").value("3_4_Sit-Up/1.jpg"));
	}

	@Test
	void returnsNullForMissingOptionalFields() throws Exception {
		given(repository.findById("90_90_Hamstring")).willReturn(Optional.of(new ExerciseDefinition(
				"90_90_Hamstring", "90/90 Hamstring", "stretching", null, "beginner", null, null,
				List.of("hamstrings"), List.of(), List.of(), List.of())));

		mockMvc.perform(get("/exercise-definitions/90_90_Hamstring"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.force").value(org.hamcrest.Matchers.nullValue()))
				.andExpect(jsonPath("$.mechanic").value(org.hamcrest.Matchers.nullValue()))
				.andExpect(jsonPath("$.equipment").value(org.hamcrest.Matchers.nullValue()));
	}

	@Test
	void listsSummariesForAMuscleWithExactlyFiveSnakeCaseFields() throws Exception {
		given(repository.findSummariesByPrimaryMuscle("middle back")).willReturn(List.of(
				new ExerciseSummary("Ankle_Circles", "Ankle Circles", "stretching", null, "beginner", "Ankle_Circles/0.jpg")));

		mockMvc.perform(get("/exercise-definitions").param("primary_muscle", "middle back"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.length()").value(1))
				.andExpect(jsonPath("$[0].slug").value("Ankle_Circles"))
				.andExpect(jsonPath("$[0].name").value("Ankle Circles"))
				.andExpect(jsonPath("$[0].category").value("stretching"))
				.andExpect(jsonPath("$[0].equipment").value(org.hamcrest.Matchers.nullValue()))
				.andExpect(jsonPath("$[0].level").value("beginner"))
				.andExpect(jsonPath("$[0].image").value("Ankle_Circles/0.jpg"))
				.andExpect(jsonPath("$[0].*").value(org.hamcrest.Matchers.hasSize(6)));
		verify(repository, never()).findAllSummaries();
	}

	@Test
	void listsAllSummariesWhenNoMuscleIsGiven() throws Exception {
		given(repository.findAllSummaries()).willReturn(List.of(
				new ExerciseSummary("a", "A", "strength", "barbell", "beginner", "a/0.jpg"),
				new ExerciseSummary("b", "B", "strength", null, "expert", null)));

		mockMvc.perform(get("/exercise-definitions"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.length()").value(2));
		verify(repository, never()).findSummariesByPrimaryMuscle(anyString());
	}

	@Test
	void returnsEmptyArrayWhenNoExerciseMatchesTheMuscle() throws Exception {
		given(repository.findSummariesByPrimaryMuscle("nope")).willReturn(List.of());

		mockMvc.perform(get("/exercise-definitions").param("primary_muscle", "nope"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isEmpty());
	}

	@Test
	void returnsProblemDocumentWhenSlugIsUnknown() throws Exception {
		given(repository.findById("nope")).willReturn(Optional.empty());

		mockMvc.perform(get("/exercise-definitions/nope"))
				.andExpect(status().isNotFound())
				.andExpect(content().contentTypeCompatibleWith(MediaType.APPLICATION_PROBLEM_JSON))
				.andExpect(jsonPath("$.status").value(404))
				.andExpect(jsonPath("$.detail").value("Exercise definition 'nope' not found"))
				.andExpect(jsonPath("$.instance").value("/exercise-definitions/nope"));
	}
}
