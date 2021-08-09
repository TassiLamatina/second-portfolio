import React, { Component } from "react";
import { Fade, Roll } from "react-reveal";

class Contact extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const city = this.props.data.location.city;
    const state = this.props.data.location.state;
    const email = this.props.data.email;
    const contactpic = "images/" + this.props.data.contactImage;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="blank">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

   

    return (
      <section id="contact">
      <Fade bottom duration={1000}>
      <div className="row">
            <div className="five columns">
              <Roll>
              <img
                className="contact-pic"
                src={contactpic} alt=""
              />
              <div className="flex row social">
                  <ul className="social-links">{ networks }</ul>
              </div>
              </Roll>
            </div>
            <div className="six columns main-col">
              <div className="row">
                <div className="twelve columns contact-details">
                  <h2>Contact Me</h2>
                  <p className="location">
                    <span>
                    {name}
                    <br />
                      <b>{city}, {state}</b>
                    </span>
                    <br />
                    <span className="email-align">{email}</span>
                  </p>
                </div>
                <div>
                <a href={email} method="post" action="mailto:tassi.lamatina@gmail.com"  className="button btn ">
                  <i className="fa fa-paper-plane"></i>Email Directly
                </a>
                </div>
              </div>
            </div>
          </div>
        </Fade>


      </section>
    
    );
  }
}








export default Contact;
