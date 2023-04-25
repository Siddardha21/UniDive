import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FaqV3 extends Component {

    render() {

    return  <section className="faq-one faq-one__faq-page">
          <div className="container">
                <div className="faq-one__block">
                  <div className="services-one-block-title text-left">
                    <h3>General FAQs</h3>
                    <span>We know that you've got a lot of questions!</span>
                  </div>
                  <div className="accordian-grp" data-grp-name="faq-one-accordian">
                    <div className="accordian ">
                      <div className="accordian-title">
                        <h4>How do I Register?</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>click the Sign-up/Login button to get started. Navigate to your particulars and continue to the services section. <br></br><br></br>Happy Diving!</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian active">
                      <div className="accordian-title">
                        <h4>How do I search for colleges/courses</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>To search for a particular college, just click on its name in the dashboard. Under each of these respective categories, you can search - About University, Popular Courses, Talk to Alumni, and many more.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>I'm interested to study in Indiana! How do I find information?</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>University Dive is specially created to guide students aspiring to study in indiana. We offers up-to-date and very useful information at country level for colleges, courses, exams required, funding options, etc . One can select colleges by course. Choose from the listings and click on the college or university you want to study in for more information. You will also find interesting information on study related topics. College Application and Visa Guides for Popular Study Abroad countries will be added soon. Stay Tuned!</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>Can UniDive help me in making good career choices?</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Deciding the right career for yourself can be tricky. We will try our best to help you choose a suitable stream right. The information which is displayed on our website can open up a world of career options before you, where you can read about a career, its job profile, career opportunities, eligibility for the course and where to seek admission to study.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>How do I stay updated with latest news?</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Subscribing to our newsletter can keep you up-to-date and well informed about all your education related information needs.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>Unsubscribe to Mails</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Yes, you have the option to unsubscribe. The unsubscribe link will always appear in the newsletter if one is sent to you. Please click it if you wish to unsubscribe.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
          </div>
        </section>


        }
}

export default FaqV3