package itengine.controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import itengine.models.User;
import itengine.models.utils.RESTError;
import itengine.repositories.UserRepository;
import itengine.services.UserService;


@CrossOrigin
@RestController
@RequestMapping(value = "/api/users")
public class UserController {

	@Autowired
	UserService userService;

	@Bean
	PasswordEncoder getEncoder() {
		return new BCryptPasswordEncoder();
	}

	@CrossOrigin
	@GetMapping
	public ResponseEntity<?> getAllUsers() {
		return userService.getAllUsers();
	}

	@GetMapping(value = "/{id}")
	public ResponseEntity<?> getUser(@PathVariable Integer id) {
		return userService.getUser(id);
	}

	@PostMapping()
	public ResponseEntity<?> saveUser(@RequestBody User user) {
		return userService.saveNew(user);
	}

	@PutMapping(value = "/{id}")
	public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody User user) {
		return userService.update(id, user);
	}

	// @PutMapping(value = "/changePassword/{id}")
	// public ResponseEntity<User> updateUserPassword(@PathVariable Integer id,
	// @RequestBody ChangePasswordDTO cpDTO) {
	// return new UserService().update(id, user)
	// }

	@DeleteMapping(value = "/{id}")
	public ResponseEntity<?> deletePost(@PathVariable Integer id) {
		return userService.delete(id);

	}

}
