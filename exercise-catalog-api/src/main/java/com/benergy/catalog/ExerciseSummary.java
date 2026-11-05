package com.benergy.catalog;

/** The few fields a list screen needs; the full row is served by the slug endpoint. */
public record ExerciseSummary(String slug, String name, String category, String equipment, String level) {
}
