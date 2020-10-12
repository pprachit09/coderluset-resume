import React from 'react'
import PropTypes from 'prop-types'

const Footer = ({ data }) => {
  const showNetworks = () => {
    if (data) {
      return (
        <ul className="social-links">
          {data.social.map((network) => (
            <li key={network.name}>
              <a target="_blank" rel="noopener noreferrer" href={network.url}>
                <i className={network.className}></i>
              </a>
            </li>
          ))}
        </ul>
      )
    }
  }

  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          {showNetworks()}
          <ul className="copyright">
            <li>&copy; Copyright 2017 Nordic Giant</li>
            <li>
              Design by{' '}
              <a title="Styleshout" href="http://www.styleshout.com/">
                Styleshout
              </a>
            </li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open"></i>
          </a>
        </div>
      </div>
    </footer>
  )
}

Footer.propTypes = {
  data: PropTypes.object
}

export default Footer
