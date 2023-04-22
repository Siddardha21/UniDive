import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FaqV3 extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'Project UniDive'

    return  <section className="faq-one faq-one__faq-page">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="faq-one__block">
                  <div className="services-one-block-title text-left">
                    <h3>Subscription FAQs</h3>
                    <span>We know that you've got a lot of questions!</span>
                  </div>
                  <div className="accordian-grp" data-grp-name="faq-one-accordian">
                    <div className="accordian ">
                      <div className="accordian-title">
                        <h4>FAQs - will add later</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian active">
                      <div className="accordian-title">
                        <h4>FAQs - will add later</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>FAQs - will add later</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
                    </div>
                    <div className="accordian">
                      <div className="accordian-title">
                        <h4>FAQs - will add later</h4>
                      </div>
                      <div className="accordian-content">
                        <div className="inner">
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                      </div>
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