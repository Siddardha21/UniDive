package com.project.unidive.entity;

import  lombok.AllArgsConstructor;
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
    //private List universities;
    private String university;
    private String desc;
    private String state;
    private String city;
    private String address;
    private int pincode;
    private String website;
    private String contact;
    private String email;
    private String rank;
    private String programoffer;
    private String courseduration;
    private String progcost;
    private String insurancecost;
    private String admissioncriteria;
    private String coursedelivery;
    private String teacherstudentratio;
    private int intlstudents;
    private String researchint;
    private String applcost;
    private String avgexpenses;
    private String oncampuscost;
    private String offcampuscost;
    private String parttimejob;
    private String oncampusemploycrit;
    private String scholarship;
    private String critforrankselection;
    private String methodofselection;
    private String stipend;
    private String tutionandfees;
    private String depenedallotment;
    private String medicalinsurance;
    private String uscitizenship;
    private String socialclimate;
    private String weather;
    private String geolocationinfo;
    private String jobnplacement;
    private String sportsactivities;
    private String contwithstudbodymem;
    private String studentsaboutuniv;
    private String academics;
    private String campuslife;
    private String networkwithfaculty;
    private String citycommunitylocalty;
    private String campusjobfairsworth;
    private String alumni;

}
