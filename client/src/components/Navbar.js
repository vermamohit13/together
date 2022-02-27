import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    const auth=localStorage.getItem('Auth Token');
    const name = "Let's get together!!";
    const description = "It is a platform for introverts to engage with one another.";

    return (
      <header id="home">
        <ParticlesBg type="circle" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="/">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/mycommunity">
                My communities
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/invitation">
                Invitations
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/contact">
                Contact Us
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/profile">
                Profile
              </a>
            </li>
            <li>
              <a className="smoothscroll" href="/login">
                Logout
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header; 