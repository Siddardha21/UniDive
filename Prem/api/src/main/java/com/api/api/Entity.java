package com.api.api;

import java.io.Serializable;

import jakarta.persistence.Column;
import jakarta.persistence.Id;

@jakarta.persistence.Entity(name = "Table_Name")
public class Entity implements Serializable{
	
	private static final long serialVersionUID = 1L;
	@Id
	public Long id;
	@Column(name = "username")
	public String username;
	@Column(name = "password")
	public String password;
	
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	
	

}
