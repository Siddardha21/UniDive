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
        <section className="service-uni  go-top">
          <div className="container">
            <div className="services-one-block-title text-center">
              <br></br><br></br>
              <h3>Explore Indiana!</h3>
            </div>
                {universities.map((data) => ( 
                <div key={data.id}>
                    <div className="services-two-center">
                    <div className="services-two__content">
                    <h3>
                        <Link to="/univdash">{data.university}</Link>
                    </h3>
                    <p><span style={{ fontWeight: 'bold' }}>About:</span> {data.desc}</p><br></br>
                    {/* <p>State: {data.state}</p> */}
                    <p><span style={{ fontWeight: 'bold' }}>Official Website:</span> {data.website}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Address:</span> {data.address}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Contact Info:</span> {data.contact}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Email id (outreach/admissions):</span> {data.email}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Ranking:</span> {data.rank}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Popular programs offered:</span> {data.programoffer}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Average course duration:</span> {data.courseduration}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Average Program Cost:</span> {data.progcost}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Average Insurance Cost:</span> {data.insurancecost}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Admission Criteria:</span> {data.admissioncriteria}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Course Delivery Method:</span> {data.coursedelivery}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Teacher to Student Ratio:</span> {data.teacherstudentratio}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>International Students:</span> {data.intlstudents}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Research Interests:</span> {data.researchint}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Application Cost:</span> {data.applcost}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Average Expenses:</span> {data.avgexpenses}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>On-campus living and costs:</span> {data.oncampuscost}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Off-campus living and costs:</span> {data.offcampuscost}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Part time Job Opportunities:</span> {data.parttimejob}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>On-campus Employment:</span> {data.oncampusemploycrit}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Scholarships:</span> {data.scholarship}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Assistantships:</span> {data.methodofselection}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Stipend:</span> {data.stipend}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Tuition and Fees:</span> {data.tutionandfees}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Dependency Allotment:</span> {data.depenedallotment}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Medical Insurance:</span> {data.medicalinsurance}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Do you have to be a U.S. Citizen to qualify for a job?:</span> {data.uscitizenship}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Social climate and Support system:</span> {data.socialclimate}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Weather conditions and climate changes:</span> {data.weather}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Geographic Information:</span> {data.geolocationinfo}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Career Fairs:</span> {data.jobnplacement}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Sports and Outdoor Activities:</span> {data.sportsactivities}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Contact with student body:</span> {data.contwithstudbodymem}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>What students have to say about the university:</span> {data.studentsaboutuniv}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Academics:</span> {data.academics}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Campus Life:</span> {data.campuslife}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Networking with faculty:</span> {data.networkwithfaculty}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>City/Community and locality of the university:</span> {data.citycommunitylocalty}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>Are on-campus jobs worth the effort:</span> {data.campusjobfairsworth}</p><br></br>
                    <p><span style={{ fontWeight: 'bold' }}>A short write-up on university after life with the alumni:</span> {data.alumni}</p><br></br>
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