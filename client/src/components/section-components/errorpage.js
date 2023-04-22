import React, { Component } from 'react';

class ErrorPage extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'
        let imagealt = 'image'

    return	<div>
        <section className="services-one services-one__service-page services-one__about-page  go-top">
			<div className="container">
			    <div className="row">
			        <div className="col-lg-6">
			            <div className="services-one__image">
			                <img src={publicUrl+"assets/images/resources/notfound.png"} alt={ imagealt } />
			            </div>
			        </div>
			        <div className="col-lg-6">
			            <div className="services-one__block">
			                <div className="services-one-block-title text-left">
			                    <h3>404 Error</h3>
			                    <p>We couldn't find what you are looking for! Please navigate to Home!</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</section>
        </div>
        }
}

export default ErrorPage