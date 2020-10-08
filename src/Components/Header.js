import React from 'react'
import ParticlesBg from 'particles-bg'
import PropTypes from 'prop-types'

const Header = ({ data }) => {
  const showBannerText = () => {
    if (data) {
      return (
        <div className="banner-text">
          <h1 className="responsive-headline">{data.name}</h1>
          <h3>{data.description}.</h3>
          <hr />
          <ul className="social">
            <a href={data.project} className="button btn project-btn">
              <i className="fa fa-book"></i>Project
            </a>
            <a href={data.github} className="button btn github-btn">
              <i className="fa fa-github"></i>Github
            </a>
          </ul>
        </div>
      )
    }
  }
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
            <a className="smoothscroll" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#portfolio">
              Works
            </a>
          </li>
          <li>
            <a className="smoothscroll" href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </nav>

      <div className="row banner">{showBannerText()}</div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  )
}

Header.propTypes = {
  data: PropTypes.object
}

export default Header
