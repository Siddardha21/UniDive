package com.project.unidive.service;

import com.mongodb.client.model.Filters;
import com.project.unidive.entity.Unidive;
import com.project.unidive.repository.UnidiveRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class UnidiveService {
    @Autowired
    private UnidiveRepository repository;

    public Unidive saveUnidive(Unidive unidive){
        unidive.setId(UUID.randomUUID().toString().split("-")[0]);
        return repository.save(unidive);
    }

    public List<Unidive> findAllUniv(){
        return repository.findAll();
    }

    public Unidive getUnivbyId(String id){
        return repository.findById(id).get();
    }

    public List<Unidive> getUnivbyPincode(int pincode){
        return repository.findByPincode(pincode);
    }

    public List<Unidive> getUnivbyState(String state){
        return repository.getUnivByState(state);
    }

    public Unidive updateUniv(Unidive univRequest){
        Unidive univExits = repository.findById(univRequest.getId()).get();
        univExits.setDesc(univRequest.getDesc());
        univExits.setAddress(univRequest.getAddress());
        univExits.setPincode(univRequest.getPincode());
        return repository.save(univExits);
    }

    public String deleteUniv(String id){
        repository.deleteById(id);
        return "University record is deleted from the database!";
    }
}
