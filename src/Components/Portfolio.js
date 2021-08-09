import React, { Component } from "react";



let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;
    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (
        <div key={id++} className="columns portfolio-item">
          <div className="item-wrap">
            <a href={projects.url} target="blank">
            <img alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center", fontSize:"20px", color:"#000"}}><b>{projects.title}</b></div>
            </a>
            <div style={{ textAlign: "center", fontSize:"12px"}}>{projects.about}</div>
            <br />
            <a href={projects.github} target="blank" style={{ align: "center", width:"30px"}}>
              <button className="button btn project-btn center">
                GitHub</button>
            </a>
        </div>
        </div>
      );
    });
    

    return (
      <>
      <section id="portfolio">
        <div left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1>Check Out Some of My Work.</h1>  
              <div
                id="portfolio-wrapper"
                className="bgrid-quarters s-bgrid-thirds cf"
              >
                {projects}
               
              </div>
            </div>
          </div>
        </div>
      </section>
      </>
    );
  }
}

export default Portfolio;
