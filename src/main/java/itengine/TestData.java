package itengine;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import javax.annotation.PostConstruct;

import itengine.models.enums.EFurnitureType;
import org.springframework.beans.factory.annotation.Autowired;


import org.springframework.security.crypto.password.PasswordEncoder;

import org.springframework.stereotype.Component;

import itengine.models.Furniture;
import itengine.models.Roles;
import itengine.models.User;
//import itengine.models.enums.UserRole;
import itengine.repositories.RolesRepository;
//import itengine.repositories.UserRoleRepository;
import itengine.services.FurnitureService;
import itengine.services.UserService;


@Component
public class TestData {
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private FurnitureService furnitureServ;
	
	@Autowired
	private RolesRepository roleRepo;
	

	@Autowired
	private PasswordEncoder passwordEncoder;
	
	
	
	@PostConstruct
	public void init() {
		
		Roles adminTemp = new Roles("ROLE_ADMINISTRATOR");
		Roles admin = roleRepo.save(adminTemp);
		
		Roles userTemp = new Roles("ROLE_USER");
		Roles user = roleRepo.save(userTemp);
		
		
		DateTimeFormatter formatter = DateTimeFormatter.ofPattern("d.M.yyyy");
		LocalDate date1 = LocalDate.parse("1.4.1993", formatter);
		
		User testUser1 = new User("JPas", "Jurz", "Borz", "dewws@gmail.com", passwordEncoder.encode("JPas"), "0063216694", date1);
		

		
		testUser1.getRoles().add(roleRepo.findById(1).get());
		testUser1.getRoles().add(roleRepo.findById(2).get());
		userService.saveNew(testUser1);
		

		
		
		

		LocalDate date2 = LocalDate.parse("28.9.1993", formatter);
		

		User testUser2 = new User("Belka", "Keka", "Beki", "dasd@gmail.com", passwordEncoder.encode("Belka"), "96655481224", date2);
		


		testUser2.getRoles().add(roleRepo.findById(2).get());
		
		userService.saveNew(testUser2);
		

		
		
		
		LocalDate date3 = LocalDate.parse("4.8.1993", formatter);
		
		User testUser3 = new User("alexandra", "andra", "anic", "sstanicsc@gmail.com", passwordEncoder.encode("alexandra"), "584984179946148", date3);
		
		testUser3.getRoles().add(roleRepo.findById(2).get());
		
		
		userService.saveNew(testUser3);
		
		
		
		
		Furniture furnitureTest1 = new Furniture("XFS-99", "Sofa Gaore", 9.599, "Sofa for all times", EFurnitureType.Sofa);
		furnitureServ.saveNew(furnitureTest1);
		
		Furniture furnitureTest2 = new Furniture("XFC-95", "Tri-sitter", 2.999, "Chair for all occasions", EFurnitureType.Chair);
		furnitureServ.saveNew(furnitureTest2);
		
		Furniture furnitureTest3 = new Furniture("XFT-9", "Plastic table", 4.299, "Great for picnic", EFurnitureType.Table);
		furnitureServ.saveNew(furnitureTest3);
		
		Furniture furnitureTest4 = new Furniture("XSS-21", "Classic wooden shelf", 3.599, "Great for space management", EFurnitureType.Shelf);
		furnitureServ.saveNew(furnitureTest4);
		
		
		
		
		
		
		
		
		
	}

}
