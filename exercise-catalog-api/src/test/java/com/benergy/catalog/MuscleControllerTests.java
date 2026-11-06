package com.benergy.catalog;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.webmvc.test.autoconfigure.WebMvcTest;
import org.springframework.test.context.bean.override.mockito.MockitoBean;
import org.springframework.test.web.servlet.MockMvc;

@WebMvcTest(MuscleController.class)
class MuscleControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@MockitoBean
	private ExerciseDefinitionRepository repository;

	@Test
	void returnsMuscleNamesWithCounts() throws Exception {
		given(repository.findMuscleCounts())
				.willReturn(List.of(new MuscleCount("abdominals", 93), new MuscleCount("biceps", 53)));

		mockMvc.perform(get("/muscles"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$.length()").value(2))
				.andExpect(jsonPath("$[0].name").value("abdominals"))
				.andExpect(jsonPath("$[0].count").value(93))
				.andExpect(jsonPath("$[1].name").value("biceps"))
				.andExpect(jsonPath("$[1].count").value(53));
	}

	@Test
	void returnsEmptyArrayWhenThereAreNoMuscles() throws Exception {
		given(repository.findMuscleCounts()).willReturn(List.of());

		mockMvc.perform(get("/muscles"))
				.andExpect(status().isOk())
				.andExpect(jsonPath("$").isEmpty());
	}
}
