import React from 'react'
import PropTypes from 'prop-types'

const Resume = ({ data }) => {
  // const skillmessage = data.skillmessage
  const showEducation = () => {
    if (data) {
      return data.education.map((education) => {
        return (
          <div key={education.school}>
            <h3>{education.school}</h3>
            <p className="info">
              {education.degree} <span>&bull;</span>
              <em className="date">{education.graduated}</em>
            </p>
            <ul>
              {education.description.map((description, i) => (
                <li key={i}>{description}</li>
              ))}
            </ul>
          </div>
        )
      })
    }
  }

  const showWork = () => {
    if (data) {
      return data.work.map((work) => {
        return (
          <div key={work.company}>
            <h3>{work.company}</h3>
            <p className="info">
              {work.title}
              <span>&bull;</span> <em className="date">{work.years}</em>
            </p>
            <strong>Projects</strong>
            <ol>
              {work.projects.map((project, i) => (
                <li key={i}>{project}</li>
              ))}
            </ol>
            <strong>Achievements</strong>
            <ol>
              {work.achievements.map((achievement, i) => (
                <li key={i}>{achievement}</li>
              ))}
            </ol>
            <strong>Certifications</strong>
            <ol>
              {work.certifications.map((certification, i) => (
                <li key={i}>{certification}</li>
              ))}
            </ol>
          </div>
        )
      })
    }
  }

  const showSkills = () => {
    if (data) {
      return data.skills.map((skills) => {
        const className = 'bar-expand ' + skills.name.toLowerCase()
        return (
          <li key={skills.name}>
            <span
              style={{ width: skills.level, backgroundColor: getRandomColor() }}
              className={className}
            ></span>
            <em>{skills.name}</em>
          </li>
        )
      })
    }
  }

  const getRandomColor = () => {
    const letters = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)]
    }
    return color
  }

  return (
    <section id="resume">
      <div className="row education">
        <div className="three columns header-col">
          <h1>
            <span>Education</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          <div className="row item">
            <div className="twelve columns">{showEducation()}</div>
          </div>
        </div>
      </div>

      <div className="row work">
        <div className="three columns header-col">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="nine columns main-col">{showWork()}</div>
      </div>

      <div className="row skill">
        <div className="three columns header-col">
          <h1>
            <span>Skills</span>
          </h1>
        </div>

        <div className="nine columns main-col">
          {/* <p>{data.skillmessage}</p> */}

          <div className="bars">
            <ul className="skills">{showSkills()}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Resume.propTypes = {
  data: PropTypes.object
}

export default Resume
