import React, { Component } from 'react';

class UnexpError extends Component {

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
			                    <h3	>Unexpected Error</h3>
			                    <p>There is something wrong with this page. We are fixing it. Please navigate to Home!</p>
			                </div>
			            </div>
			        </div>
			    </div>
			</div>
		</section>
        </div>
        }
}

export default UnexpError