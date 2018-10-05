package itengine.models;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;


@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class, property = "id"
)
public class Roles {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column
	private String name;
	
//	@OneToMany(mappedBy="role", cascade = { CascadeType.REMOVE, CascadeType.REFRESH })
//	private Set<UserRole> user = new HashSet<>();
	
	@JsonIgnore
	@ManyToMany(mappedBy = "roles", fetch= FetchType.LAZY)
	private Set<User>  users = new HashSet<>();
	
	

	

//	public Set<UserRole> getUser() {
//		return user;
//	}
//
//	public void setUser(Set<UserRole> user) {
//		this.user = user;
//	}
	
	
	
	
	

	public Integer getId() {
		return id;
	}

	public Set<User> getUsers() {
		return users;
	}

	public void setUsers(Set<User> users) {
		this.users = users;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Roles(String name) {
		super();
		this.name = name;
	}

	public Roles() {
		super();
	}

	
	
	
	
	
	
	
	

}
