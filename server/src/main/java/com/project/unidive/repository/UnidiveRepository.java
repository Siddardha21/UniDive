package com.project.unidive.repository;

import com.project.unidive.entity.Unidive;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface UnidiveRepository extends MongoRepository<Unidive, String> {
    List<Unidive> findByPincode(int pincode);

    @Query("{state: ?0}")
    List<Unidive> getUnivByState(String state);
}
