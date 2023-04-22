package com.universitydive.unidive.repository;

import com.universitydive.unidive.model.UniDive;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface UniDiveRepository extends JpaRepository<UniDive, Integer> {
}
