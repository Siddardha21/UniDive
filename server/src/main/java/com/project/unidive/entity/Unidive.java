package com.project.unidive.entity;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "unidata")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Unidive {
    @Id
    private String id;
    private List universities;
    private String university;
    private String desc;
    private String state;
    private String city;
    private String address;
    private int pincode;
}
