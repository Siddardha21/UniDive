package com.project.unidive.repository;

import com.project.unidive.entity.Contact;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ContactRepository extends MongoRepository <Contact, String> {
}
