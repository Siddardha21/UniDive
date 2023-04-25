import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

function UnivdashPage() {

    const[universities, setUniversities] = useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/unidive")
        .then(res=>res.json())
        .then((result)=>{
            setUniversities(result);
        })
    },[])

  return (
    <div >
        <section className="service-eight  go-top">
          <div className="container">
            <div className="services-one-block-title text-center">
              <p>Universities</p>
              <h3>Few of the universities in Indiana!</h3>
            </div>
                {universities.map((data) => ( 
                <div key={data.id}>
                    <div className="services-one-center">
                    <div className="services-one__content">
                    <h3>
                        <Link to="/univdash">{data.university}</Link>
                    </h3>
                    <p>University About: {data.desc}</p>
                    {/* <p>State: {data.state}</p> */}
                    <p>University Official Website: {data.website}</p>
                    <p>Address: {data.address}</p>
                    <p>Contact Info: {data.contact}</p>
                    <p>Email Id(outreach/admissions): {data.email}</p>
                    <p>University Rankings Section: {data.rank}</p>
                    <p>Popular programs offered: {data.programoffer}</p> 
                    <p>Average course duration: {data.courseduration}</p>
                    <p>Average Program Cost: {data.progcost}</p>
                    <p>Average Insurance Cost: {data.insurancecost}</p>
                    <p>Admission Criteria: {data.admissioncriteria}</p>
                    <p>Course Delivery Method: {data.coursedelivery}</p>
                    <p>Teacher to Student Ratio: {data.teacherstudentratio}</p>
                    <p>International Students: {data.intlstudents}</p>
                    <p>Research Interests: {data.researchint}</p>
                    <p>Application Cost: {data.applcost}</p>
                    <p>Average Expenses: {data.avgexpenses}</p>
                    <p>On-campus living and costs: {data.oncampuscost}</p>
                    <p>Off-campus living and costs: {data.offcampuscost}</p>
                    <p>Part time/Job Opportunities: {data.parttimejob}</p>
                    <p>On-campus Employment: {data.oncampusemploycrit}</p>
                    <p>Scholarships: {data.scholarship}</p>
                    <p>Assistantship: {data.methodofselection}</p>
                    <p>Stipend: {data.stipend}</p>
                    <p>Tution and Fees: {data.tutionandfees}</p>
                    <p>Dependency Allotment: {data.depenedallotment}</p>
                    <p>Medical Insurance: {data.medicalinsurance}</p>
                    <p>U.S. Citizenship: {data.uscitizenship}</p>
                    <p>Social climate and Support system: {data.socialclimate}</p>
                    <p>Weather conditions and climate changes: {data.weather}</p>
                    <p>Geographic Information: {data.geolocationinfo}</p>
                    <p>Career Fairs: {data.jobnplacement}</p>
                    <p>Sports and Outdoor Activities: {data.sportsactivities}</p>
                    <p>Contact with student body: {data.contwithstudbodymem}</p>
                    <p>What students have to say about the university: {data.studentsaboutuniv}</p>
                    <p>Academics: {data.academics}</p>
                    <p>Campus Life: {data.campuslife}</p>
                    <p>Networking with faculty: {data.networkwithfaculty}</p>
                    <p>City/Community and locality of the university: {data.citycommunitylocalty}</p>
                    <p>Are on-campus jobs worth the effort: {data.campusjobfairsworth}</p>
                    <p>A short write-up on university after life with the alumni: {data.alumni}</p>
                    </div>
                    </div>
                </div>
                ))}
          </div>
        </section>
    </div>
  )
}

export default UnivdashPage