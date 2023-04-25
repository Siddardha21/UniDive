import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class FinancialPage extends Component {
    
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    return (
      <div>
        <section className="services-one services-one__service-page  go-top">
          <div className="container">
            <div className="row">
                <div className="services-one__block">
                  <div className="services-one-block-title text-left">
                    <p>General Financial information</p>
                    <h3>
                    Financial information is important for all students
                    </h3>
                  </div>
                  <p>
				  As a university student, it is essential to have a basic understanding of financial management. One of the most critical pieces of financial information for students is the cost of tuition, fees, and living expenses. It is important to have a realistic estimate of the total cost of attendance to plan and budget for your educational expenses. 

Furthermore, students should be aware of the various types of financial aid available, such as scholarships, grants, and student loans. Scholarships and grants do not require repayment and can significantly reduce the financial burden of attending university. On the other hand, student loans must be repaid with interest, and it is important to carefully consider the amount of loan money you need and the repayment terms. 

In addition, students should also learn about personal finance, including budgeting, saving, and managing debt. Establishing good financial habits early on can help students avoid financial pitfalls in the future. 

Finally, it is important to be aware of financial deadlines and requirements, such as FAFSA applications and scholarship deadlines, to ensure that you do not miss out on financial aid opportunities. By staying informed about financial information, students can make informed decisions about their finances and achieve their academic and financial goals. 
                  </p>
                  
                </div>
            </div>
          </div>
        </section>

        <section className="service-eight  go-top">
          <div className="container">
            <div className="services-one-block-title text-center">
              
              <h3>University tuition fee payment methods</h3>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Flywire</h3>
                </h3>
                <p>
                Almost all universities accepts tuition fee payments through Flywire. Flywire is often considered the best method for making payments using foreign currency. Many Universities are partnered with Flywire to offer a simple international tuition payment solution. Flywire process is secure, easy, and less expensive.
                With Flywire, you can pay from any country and any bank. You are offered excellent foreign exchange rates, allowing you to pay in your home currency and save a significant amount of money as compared to traditional banks. Also, Flywire captures all your student information at the time of payment, which ensures peace-of-mind that your payment will be properly credited to your account in a timely manner.{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Wire Transfer</h3>
                </h3>
                <p>
                Universities accept tuition fee payments through direct bank wire trasnfers. It Includes National and International. Choose this option if you will be sending a wire transfer from your bank. This is a slightly costlier option compared to flywire internationally{" "}
                </p>
              </div>
            </div>
            <div className="services-one-center">
              <div className="services-one__content">
                <h3>
                  <h3>Credit and Debit Card Payments</h3>
                </h3>
                <p>
                Payment of tuition fee online using any credit card: Visa, Mastercard, or Discover.
                Students can use a credit or debit card to pay tuition, fees, fines, and other student account expenses will be often charged a percentage processing fee. This is again another costlier alternative which we advice should be only considered if there is no other option available{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        
      </div>
    );
  }

}
  

export default FinancialPage;
