package com.benergy.catalog;

/** The few fields a list screen needs (image is the first of the exercise images, or null); the full row is served by the slug endpoint. */
public record ExerciseSummary(String slug, String name, String category, String equipment, String level,
		String image) {
}
