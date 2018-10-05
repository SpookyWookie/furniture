package itengine.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import itengine.models.User;

public interface UserRepository extends JpaRepository<User, Integer>{
	
	public User findByUsername(String userName);
	
	public Boolean existsByEmail(String email);

}
