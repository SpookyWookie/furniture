package itengine.models;

import java.time.LocalDate;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.ObjectIdGenerators;

@Entity
@JsonIdentityInfo(
        generator = ObjectIdGenerators.PropertyGenerator.class, property = "id"
)
public class User {
	
	@Id
	@GeneratedValue
	private Integer id;
	
	@Column
	private String username;
	
	@Column
	private String name;
	
	@Column
	private String surname;
	
	@Column
	private String email;
	
	@Column
	@JsonIgnore
	private String password;
	
	@Column
	private String phoneNumber;
	
	
	@Column
	@JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "d.M.yyyy")
	private LocalDate birthDate;
	
//	@OneToMany(mappedBy = "user", cascade = { CascadeType.REMOVE, CascadeType.REFRESH, CascadeType.PERSIST })
//	private Set<UserRole> roles = new HashSet<>();
	
	@ManyToMany(cascade ={CascadeType.MERGE, CascadeType.REFRESH},fetch=FetchType.EAGER)
//	@ManyToMany(cascade =CascadeType.ALL,fetch=FetchType.EAGER)
    @JoinTable(name="user_roles",
        joinColumns = {@JoinColumn(name="user_id", referencedColumnName="id", nullable = false)},
        inverseJoinColumns = {@JoinColumn(name="role_id", referencedColumnName="id", nullable = false)})
	private Set<Roles> roles = new HashSet<>();
	
	

	

	public Set<Roles> getRoles() {
		return roles;
	}

	public void setRoles(Set<Roles> roles) {
		this.roles = roles;
	}

	public Integer getId() {
		return id;
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

	public String getSurname() {
		return surname;
	}

	public void setSurname(String surname) {
		this.surname = surname;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	

	
	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public LocalDate getBirthDate() {
		return birthDate;
	}

	public void setBirthDate(LocalDate birthDate) {
		this.birthDate = birthDate;
	}

	

//	public Set<UserRole> getRoles() {
//		return roles;
//	}
//
//	public void setRoles(Set<UserRole> roles) {
//		this.roles = roles;
//	}

	public User(String userName, String name, String surname, String email, String password, String phoneNumber,
			LocalDate birthDate) {
		super();
		this.username = userName;
		this.name = name;
		this.surname = surname;
		this.email = email;
		this.password = password;
		this.phoneNumber = phoneNumber;
		this.birthDate = birthDate;
	}

	public User() {
		super();
	}
	
	

	
	
	
	
	
	

}
