import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PartnerPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return	<div>
		<section className="services-one services-one__service-page services-one__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="services-one__image">
			          <img src={publicUrl+"assets/images/resources/lifesource.svg"} alt={ "LifeSource Logo" } />
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="services-one__block">
			          <div className="services-one-block-title text-left">
			            <h3>LifeSource</h3>
			          </div>
			          <p>Give the gift of life through blood donation - it's easy with us. Our user-friendly blood donation website makes it simple to schedule appointments, track your donation history, and connect with other donors in your community. We prioritize safety and quality to ensure that all blood donations are effective and helpful. Join us in making a difference and saving lives today.<br></br><br></br>Our mission is to create a user-friendly online portal that connects blood donors and recipients, making it easy for individuals and organizations to find and donate blood. Our goal is to facilitate the process of blood donation and increase the availability of blood for those in need, while ensuring the safety and privacy of all users. We strive to create a community of individuals who are passionate about saving lives and making a difference in the world through blood donation.</p>
                      <a href="https://lifesource.netlify.app/" className="thm-btn about-page-join__btn">Check out LifeSource</a>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

           <section className="partner-promo partner-promo__about-page  go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/about-bg-1.svg)'}}>
                <div className="container text-center">
                   <h3>Want to join our <br />Partner Program?</h3>
                   <Link to="/hellothere" className="thm-btn">Click Here for Info</Link>
                </div>
           </section>
        </div>
        }
}

export default PartnerPage