import React, { Component } from 'react';

class Footer_v1 extends Component {

	componentDidMount() {

		const $ = window.$;

		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/theme.js";

		document.body.appendChild(minscript);

		$('.go-top').find('a').on('click', function () {
			$(window).scrollTop(0);
		});
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'
		let imgattr = "Footer logo"

		return (
			<div>
				<footer className="site-footer-one">
					<div className="site-footer-one__upper">
						<div className="container">
							<img src={publicUrl + "assets/images/resources/footer-img.svg"} alt={"Footer Img"} className="site-footer-one__upper-moc" />
							<div className="row">
								<div className="col-lg-3">
									<div className="footer-widget footer-widget__about">
										<a href="index-2.html">
											<img src={publicUrl + "assets/images/logo-dark.svg"} alt={"UniDive Logo"} />
										</a>
										<p>One-stop solution for all students studying or wish to study at their university of choice</p>
										<form action="#" className="footer__newsletter">
											<input type="text" placeholder="Subscribe to our Newsletter" />
											<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
										</form>
									</div>
								</div>
								<div className="col-lg-4">
									<div className="footer-widget footer-widget__contact">
										<h3 className="footer-widget__title">Get Connected</h3>
										<div className="footer-widget__contact-box">
											<div className="footer-widget__contact-top">
												<i className="far fa-map-marked" />
												<h3>Address</h3>
											</div>
											<p>2101 E Colesium Blvd, Fort Wayne, Indiana 46835-3119</p>
										</div>
										<div className="footer-widget__social">
										    <a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
											<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
											<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
											<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="site-footer-one__bottom">
						<div className="container">
							<div className="site-footer-one__bottom-line" />
							<p>2023 - Group-9 - Team <a href="#">UniDive</a></p>
						</div>
					</div>
				</footer>
			</div>


		)
	}
}


export default Footer_v1