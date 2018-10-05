package itengine.controllers;

import itengine.models.Furniture;
import itengine.services.FurnitureService;
import itengine.services.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;


@CrossOrigin
@RestController
@RequestMapping(value = "/api/furniture")
public class FurnitureController {


    @Autowired
    FurnitureService furnitureService;

    @Bean
    PasswordEncoder getEncoder() {
        return new BCryptPasswordEncoder();
    }

    @CrossOrigin
    @GetMapping
    public ResponseEntity<?> getAllFurniture() {
        return furnitureService.getAllFurniture();
    }

    @GetMapping(value = "/{id}")
    public ResponseEntity<?> getFurniture(@PathVariable Integer id) {
        return furnitureService.getFurnitureItem(id);
    }

    @PostMapping()
    public ResponseEntity<?> saveUser(@RequestBody Furniture furniture) {
        return furnitureService.saveNew(furniture);
    }

    @PutMapping(value = "/{id}")
    public ResponseEntity<?> updateUser(@PathVariable Integer id, @RequestBody Furniture furniture) {
        return furnitureService.update(id, furniture);
    }

    // @PutMapping(value = "/changePassword/{id}")
    // public ResponseEntity<User> updateUserPassword(@PathVariable Integer id,
    // @RequestBody ChangePasswordDTO cpDTO) {
    // return new UserService().update(id, user)
    // }

    @DeleteMapping(value = "/{id}")
    public ResponseEntity<?> deleteFurnitureItem(@PathVariable Integer id) {
        return furnitureService.delete(id);

    }

}
