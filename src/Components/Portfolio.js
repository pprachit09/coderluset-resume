import React from 'react'
import PropTypes from 'prop-types'

const Portfolio = ({ data }) => {
  const showProjects = () => {
    if (data) {
      return data.projects.map((projects) => {
        const projectImage = 'images/portfolio/' + projects.image

        return (
          <div key={projects.title} className="columns portfolio-item">
            <div className="item-wrap">
              <a href={projects.url} title={projects.title}>
                <img alt={projects.title} src={projectImage} />
                <div className="overlay">
                  <div className="portfolio-item-meta">
                    <h5>{projects.title}</h5>
                    <p>{projects.category}</p>
                  </div>
                </div>
              </a>
            </div>
          </div>
        )
      })
    }
  }
  return (
    <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>

          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            {showProjects()}
          </div>
        </div>
      </div>
    </section>
  )
}

Portfolio.propTypes = {
  data: PropTypes.object
}

export default Portfolio
