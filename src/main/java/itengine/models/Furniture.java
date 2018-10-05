package itengine.models;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;
import itengine.models.enums.EFurnitureType;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class, property = "id"
)
public  class Furniture {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column
	private String code;
	
	@Column
	private String name;
	
	@Column
	private Double price;
	
	@Column
	private String comment;

	@Column
	private EFurnitureType type;

	public EFurnitureType getType() {
		return type;
	}

	public void setType(EFurnitureType type) {
		this.type = type;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getCode() {
		return code;
	}

	public void setCode(String code) {
		this.code = code;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public Double getPrice() {
		return price;
	}

	public void setPrice(Double price) {
		this.price = price;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Furniture(String code, String name, Double price, String comment, EFurnitureType type) {
		this.code = code;
		this.name = name;
		this.price = price;
		this.comment = comment;
		this.type = type;
	}

	public Furniture() {
		super();
	}
	
	
	
	
	
	
	
	
	

}
