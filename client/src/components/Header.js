import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {

    const auth=localStorage.getItem('token');
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
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
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/mycommunity">
                My communities
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/search">
                Search
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="/invitation">
                Invitations
              </a>
            </li>

            {auth && <li>
              <a className="smoothscroll" href="/login">
                Logout
              </a>
            </li>}
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
            <Fade bottom duration={2000}>
              <ul className="social">
                <a href="/login" className="button btn project-btn">
                  Login
                </a>
                <a href="/signup" className="button btn github-btn">
                  Sign Up
                </a>
              </ul>
            </Fade>
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