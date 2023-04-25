package com.project.unidive.service;

import com.project.unidive.entity.Contact;
import com.project.unidive.entity.Unidive;
import com.project.unidive.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ContactService {
    @Autowired
    private ContactRepository contactRepository;

    public Contact saveContact(Contact contact){
        contact.setId(UUID.randomUUID().toString().split("-")[0]);
        return contactRepository.save(contact);
    }

    public List<Contact> findAllContacts(){
        return contactRepository.findAll();
    }

    public String deleteContact(String id){
        contactRepository.deleteById(id);
        return "Contact record is deleted from the database!";
    }
}
