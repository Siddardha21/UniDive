package com.project.unidive.controller;

import com.project.unidive.entity.Unidive;
import com.project.unidive.service.UnidiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/unidive")
public class UnidiveController {
    @Autowired
    private UnidiveService service;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Unidive createUnidive(@RequestBody Unidive unidive){
        return service.saveUnidive(unidive);
    }

    @GetMapping
    public List<Unidive> getUnidive(){
        return service.findAllUniv();
    }

    @GetMapping("/{id}")
    public Unidive getUniv(@PathVariable String id){
        return service.getUnivbyId(id);
    }

    @GetMapping("/pincode/{pincode}")
    public List<Unidive> getUnivbyPin(@PathVariable int pincode){
        return service.getUnivbyPincode(pincode);
    }

    @GetMapping("state/{state}")
    public List<Unidive> getUnivState(@PathVariable String state){
        return service.getUnivbyState(state);
    }

    @PutMapping
    public Unidive modifyUniv(@RequestBody Unidive univRequest){
        return service.updateUniv(univRequest);
    }

    @DeleteMapping("/{id}")
    public String deleteUnidive(@PathVariable String id){
        return service.deleteUniv(id);
    }
}
