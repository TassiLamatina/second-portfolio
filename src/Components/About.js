import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    const linkedin = this.props.data.linkedin;
    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const city = this.props.data.location.city;
    const state = this.props.data.location.state;
    const email = this.props.data.email;

    return (
      <>
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic} alt=""
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <br />
              <br />
              <div className="row">
                <div className="columns contact-details">
                  
                  <p className="location">
                    <span><b>{name}</b></span>
                    <br />
                    <span>
                      {city}, {state}
                    </span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                  <a href={linkedin} target="blank" className="button btn project-btn">
                  <i className="fa fa-linkedin"></i>LinkedIn
                </a>
                  </p>
                </div>              
              </div>
            </div>
          </div>
        </Fade>
      </section> 
  </>
    );
  }
}

export default About;
