import React, { Component } from "react";
import { Link } from "react-router-dom";

class NewsletterPage extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div>
        <section className="services-one-cta  go-top">
          <div className="container">
            <h3>Uni-Letter</h3>
            <p>
            Sign up for our newsletter to stay up-to-date on the latest news, offers, and events. We'll send you exclusive content that you won't find anywhere else, including early access to discounts, and giveaways. Plus, you'll be the first to know about new products and services. So what are you waiting for? Sign up today!
            </p>
            <Link
              to="/hellothere"
              className="thm-btn services-one-cta__btn"
            >
              Yea! We know that the link is broken
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default NewsletterPage;
