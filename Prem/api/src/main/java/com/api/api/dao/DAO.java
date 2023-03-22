package com.api.api.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.api.api.Entity;

@Repository
public interface DAO extends JpaRepository<Entity, Long> {
	Entity findByUsername(String usernamess);
}
