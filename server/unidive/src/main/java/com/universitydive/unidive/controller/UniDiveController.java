package com.universitydive.unidive.controller;

import com.universitydive.unidive.model.UniDive;
import com.universitydive.unidive.service.UniDiveService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/uniDive")
public class UniDiveController {
    @Autowired
    private UniDiveService uniDiveService;
    @PostMapping("/add")
    public String add(@RequestBody UniDive uniDive){
        uniDiveService.saveuniDive(uniDive);
        return "Saved to Database!";
    }
    @GetMapping("/getAll")
    public List<UniDive> getAllUniversities(){
        return uniDiveService.getAllUniversities();
    }
}
