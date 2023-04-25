import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v2 extends Component {

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
			<div className="site-footer-two  go-top">
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-1.png"} alt={"Footer Style"} className="site-footer-two__shape-1" />
				<img src={publicUrl + "assets/images/shapes/footer-shape-2-2.png"} alt={"Footer Style"} className="site-footer-two__shape-2" />
				<div className="site-footer-two__upper">
					<div className="container">
						<div className="row">
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__about">
									<Link to="/">
										<img src={publicUrl + "assets/images/logo-light.svg"} alt={"UniDive Light Logo"} />
									</Link>
									<p>One-stop solution for all students studying or wish to study at their university of choice</p>
									<div className="footer-widget__social">
									<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-linkedin" /></a>
									<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-instagram" /></a>
									<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-facebook-f" /></a>
									<a href="https://blogs.motiondevelopment.top/articles/UniDive"><i className="fab fa-twitter" /></a>
									</div>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Nav Links</h3>
									<ul className="footer-widget__links-list list-unstyled">
									{/* <li>
			            					<Link to="/dashboard">Dashboard</Link>
			          					</li> */}
										<li>
			            					<Link to="/univdash">Dashboard</Link>
			          					</li>
										<li><Link to="/about">About</Link></li>
										<li><Link to="/service">Services</Link></li>
										<li><Link to="/about">Pricing and Plans</Link></li>
										<li><Link to="/contact">FAQs</Link></li>
										<li><Link to="/blog-grid">Contact</Link></li>
										<li><Link to="/contact">Login / Sign-up</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__links">
									<h3 className="footer-widget__title">Quick Links</h3>
									<ul className="footer-widget__links-list list-unstyled">
										<li><Link to="/yupitsbroken">Support</Link></li>
										<li><Link to="/newsletter">Newsletter</Link></li>
										<li><Link to="#">Join the Team</Link></li>
										<li><Link to="/partner">Partner Websites</Link></li>
										<li><Link to="/privacy">Privacy Statement</Link></li>
										<li><Link to="/terms">Terms & Conditions</Link></li>
									</ul>
								</div>
							</div>
							<div className="col-xl-3 col-lg-6">
								<div className="footer-widget footer-widget__contact">
									<h3 className="footer-widget__title">Newsletter</h3>
									<p>Subscribe to our newsletters to get latest updates!</p>
									<form action="#" className="footer__newsletter">
										<input type="text" name="s" placeholder="Enter Your Email" />
										<button type="submit"><i className="fa fa-long-arrow-alt-right" /></button>
									</form>
									<ul className="footer-widget__contact-list list-unstyled">
										<li>
											<i className="far fa-map" />
											<a>2101 E Colesium Blvd, Fort Wayne <br></br>Indiana 46835-3119</a>
										</li>
										<li>
											<i className="far fa-envelope" />
											<a href="mailto:support@unidive.com">support@unidive.com</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="site-footer-two__bottom">
					<div className="container">
						<p>2023 - Group 9 - Team <a href="/home">UniDive</a>.</p>
					</div>
				</div>
			</div>
		)
	}
}


export default Footer_v2