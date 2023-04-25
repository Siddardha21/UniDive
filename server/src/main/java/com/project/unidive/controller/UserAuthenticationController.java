package com.project.unidive.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.unidive.repository.UserRepo;
import com.project.unidive.entity.User;

@CrossOrigin()
@RestController
public class UserAuthenticationController {
	
	@Autowired
    UserRepo userRepo;
	
	
	@PostMapping("/registerUser")
    public ResponseEntity<User> newUser(@RequestBody User user) {
        User newUser = userRepo
                .save(User.builder().username(user.getUsername())
                		.email(user.getEmail())
                		.password(user.getPassword())
                		.firstname(user.getFirstname())
                		.lastname(user.getLastname())
                		.securityQuestion(user.getSecurityQuestion())
                		.securityAnswer(user.getSecurityAnswer())
                        .build());
        return new ResponseEntity<>(newUser, HttpStatus.OK);
    }
	
	@PostMapping("/authenticateUser")
    public ResponseEntity<String> authenticateUser(@RequestBody User user) {
        User validUser = userRepo.autheticateUser(user.getEmail(), user.getPassword());
        if(validUser != null) {
        return new ResponseEntity<>("success", HttpStatus.OK);
        }else {
        	return new ResponseEntity<>("success", HttpStatus.NOT_FOUND);
        }
    }
	
	
	@PostMapping("/validateUser")
    public ResponseEntity<String> validateUser(@RequestBody User user) {
        User validUser = userRepo.validateUser(user.getEmail(), user.getSecurityQuestion(), user.getSecurityAnswer());
        if(validUser != null) {
        return new ResponseEntity<>("success", HttpStatus.OK);
        }else {
        	return new ResponseEntity<>("success", HttpStatus.NOT_FOUND);
        }
    }
	
	@PostMapping("/changePassword")
    public ResponseEntity<String> changePassword(@RequestBody User user) {
       userRepo.changePassword(user.getEmail(), user.getPassword());
        
        return new ResponseEntity<>("success", HttpStatus.OK);
        
	}
}
