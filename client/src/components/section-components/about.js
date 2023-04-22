import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AboutPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'project-unidive'

    return	<div>
		<section className="services-one services-one__service-page services-one__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-6">
			        <div className="services-one__image">
			          <img src={publicUrl+"assets/images/resources/about-logo.svg"} alt={ "UniDive Main Logo" } />
			        </div>
			      </div>
			      <div className="col-lg-6">
			        <div className="services-one__block">
			          <div className="services-one-block-title text-left">
			            <p>about us</p>
			            <h3>From the Students <br /> To the Students!</h3>
			          </div>
			          <p>Being an international student ourselves, we can very much relate to the initial challenges faced while moving in.<br></br><br></br>Providing freshers with important and necessary information at the right time is our main goal. Our website will end up saving a humongous amount of time for students who wish to move to the state of Indiana to study from all over the world. Our website will help students to shortlist and zero in on the university they want to apply for upon weighing the pros and cons depending upon the information and statistics provided on our website.</p>
			        </div>
			      </div>
			    </div>
			  </div>
			</section>

           <section className="partner-promo partner-promo__about-page  go-top" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/about-bg-1.svg)'}}>
                <div className="container text-center">
                   <h3>Are you a Business Owner / <br />Edu Institution Representative? </h3>
                   <Link to="/pricing" className="thm-btn">Click Here for Info</Link>
                </div>
           </section>

		   <br></br>
		   {/* <section id="about-promo-video"></section>
		   <!--In Progress -scheduled for the final presentation--> */}
		   <br></br>

		   <section className="about-page-team about-page-team__about-page">
		  <div className="container">
		    <div className="services-one-block-title text-center">
		      <p><span>UNI-DIVERS</span></p>
		      <h3>Started from Here!</h3>
		    </div>
		    <div className="row">
		      <div className="col-lg-3 col-md-6">
		        <div className="about-page-team__single">
		          <div className="about-page-team__image">
		            <img src={publicUrl+"assets/images/team/Siddardha.svg"} alt={ "LS Siddardha" } />
		          </div>
		          <div className="about-page-team__content">
		            <div className="about-page-team__social">
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
		            </div>
		            <h3>Srinivasa Siddardha</h3>
		            <p>Lankireddy</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="about-page-team__single">
		          <div className="about-page-team__image">
		            <img src={publicUrl+"assets/images/team/Yaswanth.svg"} alt={ "K Yaswanth Krishna" } />
		          </div>
		          <div className="about-page-team__content">
		            <div className="about-page-team__social">
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
		            </div>
		            <h3>Yaswanth Krishna</h3>
		            <p>Karuturi</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="about-page-team__single">
		          <div className="about-page-team__image">
		            <img src={publicUrl+"assets/images/team/Chaitanya.svg"} alt={ "N Naga Chaitanya" } />
		          </div>
		          <div className="about-page-team__content">
		            <div className="about-page-team__social">
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
		            </div>
		            <h3>Naga Chaitanya</h3>
		            <p>Nalluru</p>
		          </div>
		        </div>
		      </div>
		      <div className="col-lg-3 col-md-6">
		        <div className="about-page-team__single">
		          <div className="about-page-team__image">
		            <img src={publicUrl+"assets/images/team/Prem.svg"} alt={ "G Prem Chand" } />
		          </div>
		          <div className="about-page-team__content">
		            <div className="about-page-team__social">
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
					<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
		            </div>
		            <h3>Prem Chand</h3>
		            <p>Gopidinne</p>
		          </div>
		        </div>
		      </div>
		    </div>
		  </div>
		</section>

		<section className="about-page-join about-page-join__about-page  go-top">
			  <div className="container">
			    <div className="row">
			      <div className="col-xl-6">
			        <div className="about-page-join__content">
			          <div className="services-one-block-title text-left">
			            <p>Join the Crew</p>
			            <h3>Diver Community <br /> Welcomes You!</h3>
			          </div>
			          <p>We are only one, but we are one. We cannot do everything, but we can do something. And we will not let what we cannot do interfere with what we can do. Don't expect to receive if you're not willing to give. Join hands in making the international community stronger and wiser.</p>
			          <h4>Become a part of the Tribe!</h4>
			          <p>Each one of us can make a difference. Together we can make change.</p>
			          <Link to="/services-one-details" className="thm-btn about-page-join__btn">Apply Now</Link>
			        </div>
			      </div>
			      <div className="col-xl-6 d-flex justify-content-center">
			        <div className="about-page-img">
			          <img src={publicUrl+"assets/images/resources/about-4.svg"} alt={ "About Page Elements" } />
			        </div>
			      </div>
			    </div>
			  </div>
			</section>
        </div>
        }
}

export default AboutPage