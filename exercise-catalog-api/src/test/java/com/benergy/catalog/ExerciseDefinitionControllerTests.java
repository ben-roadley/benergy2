package com.benergy.catalog;

import static org.mockito.BDDMockito.given;
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
