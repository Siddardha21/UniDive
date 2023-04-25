import React, { Component } from 'react';
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAM4hJhFEZXyvFIEuh4-ABxFCAynH8sLyg",
  authDomain: "unidive-90382.firebaseapp.com",
  databaseURL: "https://unidive-90382-default-rtdb.firebaseio.com",
  projectId: "unidive-90382",
  storageBucket: "unidive-90382.appspot.com",
  messagingSenderId: "706605745582",
  appId: "1:706605745582:web:2fe92cfab3e3078af4743f",
  measurementId: "G-HCHGBC9JX0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
class Contact extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div>
		  <section className="contact-page-one">
		    <div className="container">
		      <div className="row">
		        <div className="col-lg-5">
		          <div className="contact-page-one__content">
		            <div className="contact-page-one__block">
		              <h3>Looking for <br></br>more Information?</h3>
		              <p>Want to get in touch? We'd love to hear from you.</p>
		            </div>
		            <ul className="list-unstyled contact-page-one__info-list">
		              <li>
		                <div className="contact-page-one__info-list-title">
		                  <i className="far fa-map-marked" />
		                  Address :
		                </div>
		                <p>2101 E Colesium Blvd, <br />Fort Wayne, Indiana 46835-3119</p>
		              </li>
		              <li>
		                <div className="contact-page-one__info-list-title">
		                  <i className="far fa-envelope" />
		                  Email Us :
		                </div>
		                <p><a href="mailto:support@unidive.com">support@unidive.com</a></p>
		              </li>
		            </ul>
		          </div>
		        </div>
		        <div className="col-lg-7">
		          <form action="#" className="contact-page-one__form">
		            <div className="contact-page-one__block">
		              <h3>Get In Touch</h3>
		              <p>Sometimes you need a little more help, or a UniDive support rep. Don’t worry… we’re here for you.<br></br>Typical responses in 2 - 3 hours.</p>
		            </div>
		            <div className="row">
		              <div className="col-md-6">
		                <input type="text" placeholder="Full Name" />
		              </div>
		              <div className="col-md-6">
		                <input type="text" placeholder="Email Address" />
		              </div>
		              <div className="col-md-12">
		                <input type="text" placeholder="Subject" />
		              </div>
		              <div className="col-md-12">
		                <textarea name="message" placeholder="Message" defaultValue={""} />
		                <button type="submit" className="thm-btn contact-page-one__btn">Send</button>
		              </div>
		            </div>
		          </form>
		        </div>
		      </div>
		    </div>
		  </section>
		</div>
    }
}

export default Contact