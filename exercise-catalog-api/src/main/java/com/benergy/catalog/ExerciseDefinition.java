package com.benergy.catalog;

import java.util.List;

import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

/** Read-only view of the Django-owned table; Hibernate never creates or alters it. */
@Entity
@Table(name = "catalog_exercisedefinition")
public class ExerciseDefinition {

	@Id
	private String slug;

	private String name;

	private String category;

	private String force;

	private String level;

	private String mechanic;

	private String equipment;

	@JdbcTypeCode(SqlTypes.JSON)
	private List<String> primaryMuscles;

	@JdbcTypeCode(SqlTypes.JSON)
	private List<String> secondaryMuscles;

	@JdbcTypeCode(SqlTypes.JSON)
	private List<String> instructions;

	@JdbcTypeCode(SqlTypes.JSON)
	private List<String> images;

	/** Required by JPA, which instantiates entities through reflection. */
	protected ExerciseDefinition() {
	}

	public ExerciseDefinition(String slug, String name, String category, String force, String level,
			String mechanic, String equipment, List<String> primaryMuscles, List<String> secondaryMuscles,
			List<String> instructions, List<String> images) {
		this.slug = slug;
		this.name = name;
		this.category = category;
		this.force = force;
		this.level = level;
		this.mechanic = mechanic;
		this.equipment = equipment;
		this.primaryMuscles = primaryMuscles;
		this.secondaryMuscles = secondaryMuscles;
		this.instructions = instructions;
		this.images = images;
	}

	public String getSlug() {
		return slug;
	}

	public String getName() {
		return name;
	}

	public String getCategory() {
		return category;
	}

	public String getForce() {
		return force;
	}

	public String getLevel() {
		return level;
	}

	public String getMechanic() {
		return mechanic;
	}

	public String getEquipment() {
		return equipment;
	}

	public List<String> getPrimaryMuscles() {
		return primaryMuscles;
	}

	public List<String> getSecondaryMuscles() {
		return secondaryMuscles;
	}

	public List<String> getInstructions() {
		return instructions;
	}

	public List<String> getImages() {
		return images;
	}
}
