import React from 'react'
import PropTypes from 'prop-types'

const Testimonials = ({ data }) => {
  const showTestimonials = () => {
    if (data) {
      return data.testimonials.map((testimonials) => {
        return (
          <li key={testimonials.user}>
            <blockquote>
              <p>{testimonials.text}</p>
              <cite>{testimonials.user}</cite>
            </blockquote>
          </li>
        )
      })
    }
  }
  return (
    <section id="testimonials">
      <div className="text-container">
        <div className="row">
          <div className="two columns header-col">
            <h1>
              <span>Client Testimonials</span>
            </h1>
          </div>

          <div className="ten columns flex-container">
            <ul className="slides">{showTestimonials()}</ul>
          </div>
        </div>
      </div>
    </section>
  )
}

Testimonials.propTypes = {
  data: PropTypes.object
}

export default Testimonials
