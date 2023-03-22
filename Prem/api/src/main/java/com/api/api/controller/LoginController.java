package com.api.api.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.api.api.Entity;
import com.api.api.dao.DAO;

@RestController
public class LoginController {
	
	@Autowired
	private DAO dao;
	
	@GetMapping("/login/{username}/{password}")
	public Entity login(@PathVariable String username, @PathVariable String password) {
		System.out.println(username);
		Entity entity = dao.findByUsername(username);
		System.out.println(entity);
		return entity;
	}
	
	@PostMapping("/save")
	public Entity save(@RequestBody Entity entity) {
		return dao.save(entity);
	}

}
