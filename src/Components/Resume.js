import React, { Component } from "react";
import Slide from "react-reveal";


class Resume extends Component { 
  render() {
    if (!this.props.data) return null;

    const ATSresumedownload = this.props.data.ATSresumedownload;
    const viewATSresume = this.props.data.viewATSresume;
    const skillitems = this.props.data.skillitems;
    const viewdesignresume = this.props.data.viewdesignresume;
    const designresumedownload = this.props.data.designresumedownload;
    
       return (
      <section id="resume">
        <div>
        <Slide left duration={1300}>
          <div className="row ATSResume">
            <div className="three columns header-col">
              <h1>
                <span style={{ textAlign: "center"}}>ATS Resume</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="nine columns main-col">
                <div className="columns download center">
                    <ul className="social">
                      <a href={ATSresumedownload} download="Resume" className="button btn project-btn">
                            Download
                      </a>
                      {/* <a href={viewATSresume} className="button btn project-btn" target="blank">
                          View
                      </a>    */}
                      <a href={viewATSresume} target="blank" style={{ align: "center", width:"30px"}}>
                        <button className="button btn project-btn center">
                          View</button>
                      </a>
                      </ul> 
                     </div>         
                </div>       
            </div>
          </div>
        </Slide>
      </div>

      <div>
        <Slide left duration={1300}>
          <div className="row work designResume">
            <div className="three columns header-col">
              <h1>
                <span>Design Resume</span>
                </h1>
            </div>

            <div className="nine columns main-col">
            <div className="nine columns main-col">
            <div className="columns download center">
                  <ul className="social">
                      <a href={designresumedownload} className="button btn project-btn" download>
                          Download
                      </a>
                      <a href={viewdesignresume} className="button btn project-btn" target="blank">
                          View
                      </a>   
                  </ul>
              </div>         
            </div>       
            </div>
          </div>
        </Slide>
      </div>

      <div>
        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <span>Skills</span>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p className="skilltxt">{skillitems}</p>
              
            </div>
          </div>
        </Slide>
      </div>
      </section>
    );
  }
}

export default Resume;
