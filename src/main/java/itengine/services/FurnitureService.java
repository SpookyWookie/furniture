package itengine.services;

import java.util.List;

import itengine.models.utils.RESTError;
import itengine.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import itengine.models.Furniture;
import itengine.repositories.FurnitureRepository;


@Service
public class FurnitureService {
	
	@Autowired
	private FurnitureRepository furnitureRepo;

	@Autowired
	private UserRepository userRepository;

	public List<Furniture> getAllPageUsers() {
		return furnitureRepo.findAll();
	}

	public ResponseEntity<List<Furniture>> getAllFurniture() {
		return new ResponseEntity<List<Furniture>> (furnitureRepo.findAll(), HttpStatus.OK);
	}

	@Bean
	PasswordEncoder getEncoder() {
		return new BCryptPasswordEncoder();
	}

	public ResponseEntity<?> getFurnitureItem(Integer id) {
		Furniture furniture = furnitureRepo.findById(id).orElse(null);
		if (furniture == null) {
			return new ResponseEntity<>((new RESTError(2, "Furniture item not found")), HttpStatus.BAD_REQUEST);
		}
		return new ResponseEntity<>(furniture, HttpStatus.OK);
	}

	public ResponseEntity<?> saveNew(Furniture furniture) {

		if (!furnitureRepo.existsByCode(furniture.getCode())) {

			return new ResponseEntity<>(furnitureRepo.save(furniture), HttpStatus.OK);
		} else {
			return new ResponseEntity<>((new RESTError(1, "Code in use")), HttpStatus.BAD_REQUEST);
		}
	}

	public ResponseEntity<?> update(Integer id, Furniture furniture){
		if (furnitureRepo.findById(id).isPresent()) {
			furniture.setId(id);

			return new ResponseEntity<>(furnitureRepo.save(furniture), HttpStatus.OK);
		}else {
			return new ResponseEntity<>((new RESTError(2, "User not found")), HttpStatus.BAD_REQUEST);
		}

	}

	public ResponseEntity<?> delete(Integer id) {
		Furniture furniture = furnitureRepo.findById(id).orElse(null);
		if (furniture != null) {
			furnitureRepo.delete(furniture);
			return new ResponseEntity<>((new RESTError( 3, "Furniture item deleted")), HttpStatus.OK);
		} else
			return new ResponseEntity<>((new RESTError( 2, "Furniture item not found")), HttpStatus.NOT_FOUND);
	}

	public boolean existByCode(String code) {
		if (furnitureRepo.existsByCode(code)) {
			return true;
		}

		return false;
	}

}
