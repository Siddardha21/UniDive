import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Pricing extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return <div>
      <section className="pricing-one pricing-one__pricing-page">
        <div className="container">
          <div className="pricing-one__block">
            <div className="services-one-block-title text-left">
              <p>Maximize your savings today</p>
              <h3>We've got a little bit of everything<br />  for everyone! </h3>
            </div>
          </div>
          <div className="tab-content">
            <div className="tab-pane show active  animated fadeInUp" id="monthly">
              <div className="row">
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                    <span className="pricing-one__corner-ribbon">Free</span>
                      <img src={publicUrl+"assets/images/shapes/pricing-free.svg"} alt={ "Free Subscription" } />
                      <div className="pricing-one__top">
                        <p><span>$</span>0</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />Limited access</li>
                        <li><i className="far fa-check" />Limited eligibility index attempts</li>
                        <li><i className="far fa-check" />Limited access to statistical data</li>
                        <li><i className="far fa-check" />24/7 support</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                      <span className="pricing-one__corner-ribbon">Starter</span>
                      <img src={publicUrl+"assets/images/shapes/pricing-starter.svg"} alt={ "Starter Subscription" } />
                      <div className="pricing-one__top">
                        <p><span>$</span>4.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />Unlimited access to all resources</li>
                        <li><i className="far fa-check" />Access to discussion forums</li>
                        <li><i className="far fa-check" />Unlimited eligibility index attempts</li>
                        <li><i className="far fa-check" />24/7 support</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="pricing-one__single">
                    <div className="pricing-one__inner">
                    <span className="pricing-one__corner-ribbon">Pro</span>
                      <img src={publicUrl+"assets/images/shapes/pricing-pro.svg"} alt= { "Pro Subscription" } />
                      <div className="pricing-one__top">
                        <p><span>$</span>9.99</p>
                      </div>
                      <ul className="pricing-one__list list-unstyled">
                        <li><i className="far fa-check" />Unlimited access to all resources</li>
                        <li><i className="far fa-check" />Unlimited discussion forum posts</li>
                        <li><i className="far fa-check" />Cash-out options upto $1000</li>
                        <li><i className="far fa-check" />24/7 support</li>
                      </ul>
                      <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing-page-one__top">
      <div className="container">
        <div className="pricing-one__block">
          <div className="services-one-block-title text-left">
            <p>Annual Subscription</p>
            <h3>All out! At a Go!</h3>
          </div>
        </div>
      </div>
    </section>

    <section className="pricing-page-one">
      <div className="container">
        <div className="inner-container">
          <div className="tab-content">
            <div className="tab-pane show active  animated fadeInUp">
              <div className="row">
                <div className="col-xl-6">
                  <div className="pricing-page-one__single">
                    <div className="pricing-page-one__single-inner">
                      <div className="pricing-page-one__left">
                        <img src={publicUrl+"assets/images/shapes/pricing-starter.svg"} className="pricing-page-one__icon" alt= { "Starter Subscription" } />
                        <h3>Starter</h3>
                        <p><span>$</span>49.99</p>
                      </div>
                    </div>
                    <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                  </div>
                </div>
                <div className="col-xl-6">
                  <div className="pricing-page-one__single">
                    <div className="pricing-page-one__single-inner">
                      <div className="pricing-page-one__left">
                        <img src={publicUrl+"assets/images/shapes/pricing-pro.svg"} className="pricing-page-one__icon" alt= { "Pro Subscription" } />
                        <h3>Pro</h3>
                        <p><span>$</span>99.99</p>
                      </div>
                    </div>
                    <a href="#" className="thm-btn pricing-one__btn">Choose Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="cta-one cta-one__pricing-page  go-top">
        <img src={publicUrl+"assets/images/shapes/salesman.svg"} className="cta-one__moc-1" alt={ "Salesman" }/>
        <div className="container">
          <div className="inner-container">
            <div className="cta-one__left">
              <h3>Advertise on our platform</h3>
              <p>Are you a business owner/educational institution representative? We got a special pricing for you as well! <br/><br/>Submit your particulars to get a personalized quote!</p>
            </div>
            <div className="cta-one__right">
              <Link to="/contact" className="thm-btn cta-one__btn">Quotation</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  }
}

export default Pricing