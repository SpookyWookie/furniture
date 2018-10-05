/*package itengine.models.enums;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

import itengine.models.Roles;
import itengine.models.User;


@Entity
public class UserRole {
	
	
	@Id
	@GeneratedValue
	private Integer id;

	@ManyToOne(cascade = CascadeType.REFRESH, fetch = FetchType.LAZY)
	@JoinColumn(name = "user")
	private User user;

	@ManyToOne(cascade = CascadeType.REFRESH)
	@JoinColumn(name = "role")
	private Roles role;
	
	

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public itengine.models.User getUser() {
		return user;
	}

	public void setUser(itengine.models.User user) {
		this.user = user;
	}

	public Roles getRole() {
		return role;
	}

	public void setRole(Roles role) {
		this.role = role;
	}

	public UserRole(User user, Roles role) {
		super();
		this.user = user;
		this.role = role;
	}
	
	
	
	

}
*/