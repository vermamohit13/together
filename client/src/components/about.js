import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <p>This is about page </p>
            <p> All communities will be shown here....</p>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;