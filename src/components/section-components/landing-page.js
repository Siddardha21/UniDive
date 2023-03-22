import React, { Component } from "react";
import { Link } from "react-router-dom";

class Banner extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";
    let imagealt = "Project UniDive";

    return (
      <div>
        <section
          className="banner-one go-top"
          style={{
            backgroundImage:
              "url(" + publicUrl + "assets/images/backgrounds/home-banner.svg)",
          }}
        >
          <img
            src={publicUrl + "assets/images/resources/home-img.svg"}
            alt={imagealt}
            className="banner-one__moc"
          />
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-6">
                <div className="banner-one__content">
                  <h3>
                    <span>
                      <em>Curiosity</em>
                      <br /> is important than <br /> knowledge
                    </span>
                  </h3>
                  <p>The importance of information is <br/>directly proportional to its improbability.</p>
                  <Link to="/service" className="thm-btn banner-one__btn">
                    Discover Now
                </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Banner;
