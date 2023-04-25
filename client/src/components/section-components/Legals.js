import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LegalPage extends Component {
    
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
                    <p>Legal information for students on F1 visa</p>
                    <h3>
                      Understanding legalities <br /> is crucial for all International students
                    </h3>
                  </div>
                  <p>
				  International students who are on an F1 visa are expected to comply with various laws and regulations set forth by the United States government. Being aware of legal information is crucial for international students on an F1 visa for several reasons.

Firstly, it is essential for F1 visa holders to understand the immigration laws and regulations that apply to them. These laws govern their stay in the country, including the duration of their visa, their ability to work, and the conditions under which they can apply for an extension of their visa or a change of status. Failure to comply with these laws can result in serious consequences, including deportation and a bar from re-entering the country.

Secondly, F1 visa holders must also be aware of their legal rights and responsibilities while studying in the United States. For example, they have the right to be free from discrimination and harassment, the right to due process, and the right to access legal counsel. At the same time, they also have a responsibility to adhere to academic policies and procedures, maintain their visa status, and report any changes to their personal information, such as a change of address, to the appropriate authorities.

Finally, international students on an F1 visa may also need to navigate various legal issues related to their personal and academic lives. For example, they may need to understand the laws related to leasing an apartment, obtaining a driver's license, or starting a business. Without knowledge of these legal requirements, F1 visa holders may face unnecessary challenges or even legal consequences 
                  </p>
                  
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
                            <h3>
                            Obtain a valid F-1 visa and I-20 form
                            </h3>
                          </h3>
                          <p>
                          The F-1 visa is a non-immigrant visa. The I-20 form is a document issued by the school that you will be attending, and it certifies that you have been accepted into the school and that you have the financial resources to pay for your studies.
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
                            <h3>
                            Maintain full-time student status
                            </h3>
                          </h3>
                          <p>
                          To maintain your F-1 visa status, you must be enrolled in a full-time course of study at a SEVP-certified school. You must also maintain a passing grade point average (GPA) and complete your studies within the prescribed time frame.
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
                            <h3>
                            Obtain authorization to work on or off campus
                            </h3>
                          </h3>
                          <p>
                          International students on F-1 visas are allowed to work on or off campus with authorization from the U.S. Citizenship and Immigration Services (USCIS). To obtain work authorization, you must complete Form I-765, Application for Employment Authorization.
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
                            <h3>
                            Leave the United States before your visa expires
                            </h3>
                          </h3>
                          <p>
                          Students F-1 visa will expire after the period of time that you were authorized to stay in the United States. If you want to stay in the United States after your visa expires, you must apply for a change of status or an extension of your visa.
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
              
              <h3>Even More Legal Information</h3>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Obtain health insurance</h3>
                </h3>
                <p>
                International students on F-1 visas are required to have health insurance that meets the minimum standards set by the U.S. Department of State. You can find more information about health insurance for international students on the USCIS website.{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Report changes in your status</h3>
                </h3>
                <p>
                If your address, phone number, or other contact information changes, you must report it to your Designated School Official (DSO) within 10 days of the change. You can find more information about reporting changes in your status on the USCIS website.{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Be aware of your rights and responsibilities</h3>
                </h3>
                <p>
                As an international student on F-1 visa, you have certain rights and responsibilities. You can find more information about your rights and responsibilities on the USCIS website.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    );
  }

}
  

export default LegalPage;
