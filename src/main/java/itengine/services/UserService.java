package itengine.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import itengine.models.User;
import itengine.models.utils.RESTError;
import itengine.repositories.UserRepository;

@Service
public class UserService {

	@Autowired
	private UserRepository userRepository;

	@Autowired
	private PasswordEncoder passwordEncoder;

	
//	@Bean
//	PasswordEncoder getEncoder() {
//	    return new BCryptPasswordEncoder();
//	}


	public List<User> getAllPageUsers() {
		return userRepository.findAll();
	}

	public  ResponseEntity<List<User>> getAllUsers() {
		return new ResponseEntity<List<User>> (userRepository.findAll(), HttpStatus.OK);
	}

	public ResponseEntity<?> getUser(Integer id) {
		User user = userRepository.findById(id).orElse(null);
		if (user == null) {
			return new ResponseEntity<>((new RESTError(2, "User not found")), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(user, HttpStatus.OK);
	}

	public ResponseEntity<?> saveNew(User user) {
		
		if (!userRepository.existsByEmail(user.getEmail())) {
			
//			user.setPassword(passwordEncoder.encode(user.getPassword()));

			return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
		} else {
			return new ResponseEntity<>((new RESTError(1, "Email in use")), HttpStatus.BAD_REQUEST);
		}
	}
	
	public ResponseEntity<?> update(Integer id, User user){
		if (userRepository.findById(id).isPresent()) {
			user.setId(id);
			if (user.getPassword() != null) {
				user.setPassword(passwordEncoder.encode(user.getPassword()));
			}
			return new ResponseEntity<>(userRepository.save(user), HttpStatus.OK);
		}else {
			return new ResponseEntity<>((new RESTError(2, "User not found")), HttpStatus.BAD_REQUEST);
		}
		
	}

	public ResponseEntity<?> delete(Integer id) {
		User user = userRepository.findById(id).orElse(null);
		if (user != null) {
			userRepository.delete(user);
			return new ResponseEntity<>((new RESTError( 3, "User deleted")), HttpStatus.OK);
		} else
			return new ResponseEntity<>((new RESTError( 2, "User not found")), HttpStatus.NOT_FOUND);
	}

	public boolean existByEmail(String email) {
		if (userRepository.existsByEmail(email)) {
			return true;
		}

		return false;
	}

}
