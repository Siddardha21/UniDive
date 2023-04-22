import React, { Component } from "react";
import { Link } from "react-router-dom";

class Services extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <section className="services-one services-one__service-page  go-top">
          <div className="container">
            <div className="row">
              <div className="col-lg-5">
                <div className="services-one__block">
                  <div className="services-one-block-title text-left">
                    <p>Uni - Services</p>
                    <h3>
                      The greatest luxury <br /> is being Free
                    </h3>
                  </div>
                  <p>
				  We believe that access to information is the key to unlocking endless opportunities. Our application is designed to provide an innovative and interactive learning experience for students willing to pursue education in USA. We offer a wide range of services, which cover the entirety of the doubts that an international student who has moved into his new home for the next couple of years. Our tabs and services are curated and updated regularly to ensure that users receive the most relevant and up-to-date information. With access to a community of like-minded individuals, where they can connect and collaborate with others who share similar interests and goals. We believe that collaboration and peer learning are powerful tools for enhancing the learning experience. We are committed to providing high-quality information that is accessible to everyone. We offer affordable pricing plans and financial aid options to ensure that cost is not a barrier to knowledge.
                  </p>
                  <Link to="/pricing" className="thm-btn">
                    Check out our Prices
                  </Link>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="services-one__box-wrap">
                  <div className="row">
                    <div className="col-md-6">
                      <div className="services-one__single js-tilt">
                        <div
                          className="services-one__single-image"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/backgrounds/service-card-bg.svg)",
                          }}
                        />
                        <div className="services-one__single-inner">

                          <h3>
                            <Link to="/services-one-details">
                              University Information
                            </Link>
                          </h3>
                          <p>
                            We provide comprehensive and detailed information
                            regarding the universities in the state of Indiana
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="services-one__single js-tilt">
                        <div
                          className="services-one__single-image"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/backgrounds/service-card-bg.svg)",
                          }}
                        />
                        <div className="services-one__single-inner">
                          <h3>
                            <Link to="/services-one-details">
                              Job Opportunities
                            </Link>
                          </h3>
                          <p>
                            We provide precise and helpful information regarding
                            the job opportunities in and around the cities and
                            location of the universities.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="services-one__single js-tilt">
                        <div
                          className="services-one__single-image"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/backgrounds/service-card-bg.svg)",
                          }}
                        />
                        <div className="services-one__single-inner">
                          <h3>
                            <Link to="/services-one-details">
                              City Information
                            </Link>
                          </h3>
                          <p>
                            We provide information regarding the cities in which
                            the universities are situated.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="services-one__single js-tilt">
                        <div
                          className="services-one__single-image"
                          style={{
                            backgroundImage:
                              "url(" +
                              publicUrl +
                              "assets/images/backgrounds/service-card-bg.svg)",
                          }}
                        />
                        <div className="services-one__single-inner">
                          <h3>
                            <Link to="/services-one-details">
                              Financial Information & Advice
                            </Link>
                          </h3>
                          <p>
                            We offer sound financial information and advice for
                            students, based on the university of their choice.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="service-eight  go-top">
          <div className="container">
            <div className="services-one-block-title text-center">
              <p>UNI - EXCLUSIVE</p>
              <h3>Believe there are no limits but the sky!</h3>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <Link to="/service">Student Connections</Link>
                </h3>
                <p>
                  We connect current students at the universities with students
                  who got admitted and are seeking help from the students at the
                  respective universities.{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <Link to="/service">On-Campus Job Opportunities</Link>
                </h3>
                <p>
                  We provide key information regarding the part-time jobs
                  available in the universities and the legal framework
                  surrounding it for the students seeking it.{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <a href="#">Housing & Renting Info</a>
                </h3>
                <p>
                  We provide sound information and advice regarding the optimal
                  housing and renting information considering all the factors
                  surrounding the respective university.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="services-one-cta  go-top">
          <div className="container">
            <h3>Best-in-class service at your fingertips</h3>
            <p>
              We believe in providing high-quality information at
              fair and transparent prices. We understand that pricing is an
              important consideration for our users, and we strive to offer
              competitive rates without compromising on the quality of our
              services. Our pricing is based on the scope and complexity of the
              availability of data, and we provide detailed quotes to ensure
              that our users and partners have a clear understanding of the cost
              before any work begins. We also offer flexible payment options to
              make our services more accessible and convenient. Our goal is to
              build long-term relationships with our customers by providing
              exceptional services and value for their investment.
            </p>
            <Link
              to="/services-one-details"
              className="thm-btn services-one-cta__btn"
            >
              Check out our Prices
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default Services;
