import React, { Component } from 'react';

class Page_header extends Component {

    render() {

        let HeaderTitle = this.props.headertitle;
        let publicUrl = process.env.PUBLIC_URL+'/'
        let Img = this.props.Img ? this.props.Img :'header-banner1.svg'

        return (
			<section className="page-header" style={{backgroundImage: 'url('+publicUrl+'assets/images/backgrounds/'+Img+')'}}>
				  <div className="container">
				    <h2>{ HeaderTitle }</h2>
				  </div>
			</section>

        )
    }
}

export default Page_header