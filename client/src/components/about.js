import { Container } from "@mui/material";
import React, { Component } from "react";
import Fade from "react-reveal";

class About extends Component {
  render() {
    if (!this.props.data) return null;

    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="about">
            <Container>
              <div className="col-md-12 ">
                <h2>About Us</h2>
                <p>Together is an app which will assist individuals in learning new things from others, allowing them to improve their talents in a variety of sectors. It will assist individuals in making new friends, interacting with others, and broadening their horizons. Hence, it will encourage people to join in more extracurricular activities, as well as improve their communication skills and a variety of other talents. This is especially beneficial to freshmen who are shy and hesitant to join in any events or activities, and it creates a competitive spirit among students, encouraging them to participate more.
          </p>
              </div>
            </Container>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
