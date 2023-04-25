package com.project.unidive.controller;

import com.project.unidive.entity.Contact;
import com.project.unidive.entity.Unidive;
import com.project.unidive.service.ContactService;
import com.project.unidive.service.UnidiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/contact")
public class ContactController {
    @Autowired
    private ContactService contactService;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Contact createContact(@RequestBody Contact contact){
        return contactService.saveContact(contact);
    }

    @GetMapping
    public List<Contact> getContact(){
        return contactService.findAllContacts();
    }

    @DeleteMapping("/{id}")
    public String deleteContact(@PathVariable String id){
        return contactService.deleteContact(id);
    }
}
