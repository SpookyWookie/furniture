package itengine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import itengine.models.Roles;

public interface RolesRepository extends JpaRepository<Roles, Integer>{
	
	
	public Roles findByName(String name);
	

}
