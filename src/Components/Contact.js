import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { sendNotification } from '../api/notification'

const Contact = ({ data }) => {
  const [body, setBody] = useState({
    source: 'resume',
    email: '',
    subject: '',
    message: '',
    error: '',
    success: false
  })
  const [loading, setLoading] = useState(false)

  const { success, error } = body

  const handleChange = (name) => (e) => {
    setBody({ ...body, [name]: e.target.value })
  }

  const handleSubmit = (e) => {
    setLoading(true)
    e.preventDefault()

    sendNotification(body).then((data) => {
      setLoading(false)
      if (data.success === false) {
        setBody({ ...body, error: 'error', success: false })
      } else {
        setBody({
          ...body,
          email: '',
          message: '',
          error: '',
          success: true
        })
      }
    })
  }

  const showMessage = () => {
    if (data) {
      return (
        <div className="ten columns">
          <p className="lead">{data.contactmessage}</p>
        </div>
      )
    }
  }

  const showContact = () => {
    if (data) {
      return (
        <div className="widget widget_contact">
          <h4>Address and Phone</h4>
          <p className="address">
            {data.name}
            <br />
            {data.address.street} <br />
            {data.address.city}, {data.address.state} {data.address.zip}
            <br />
            <span>{data.phone}</span>
          </p>
        </div>
      )
    }
  }

  return (
    <section id="contact">
      <div className="row section-head">
        <div className="two columns header-col">
          <h1>
            <span>Get In Touch.</span>
          </h1>
        </div>
        {showMessage()}
      </div>

      <div className="row">
        <div className="eight columns">
          <form>
            <fieldset>
              <div>
                <label htmlFor="contactEmail">
                  Email <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactEmail"
                  name="contactEmail"
                  onChange={handleChange('email')}
                />
              </div>

              <div>
                <label htmlFor="contactSubject">Subject</label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactSubject"
                  name="contactSubject"
                  onChange={handleChange('subject')}
                />
              </div>

              <div>
                <label htmlFor="contactMessage">
                  Message <span className="required">*</span>
                </label>
                <textarea
                  cols="50"
                  rows="15"
                  id="contactMessage"
                  name="contactMessage"
                  onChange={handleChange('message')}
                ></textarea>
              </div>

              <div>
                <button className="submit" onClick={handleSubmit}>
                  Submit
                </button>
                <span style={{ display: loading ? '' : 'none' }}>
                  <img alt="" src="images/loader.gif" />
                </span>
                <h3 style={{ color: 'red', display: error ? '' : 'none' }}>
                  {' '}
                  Something went wrong. Please try again
                </h3>
                <h3 style={{ color: 'white', display: success ? '' : 'none' }}>
                  <strong>
                    <i className="fa fa-check"></i>
                    Thank you for your message! I will get back to you ASAP
                    <br />
                  </strong>
                </h3>
              </div>
            </fieldset>
          </form>
        </div>

        <aside className="four columns footer-widgets">{showContact()}</aside>
      </div>
    </section>
  )
}

Contact.propTypes = {
  data: PropTypes.object
}

export default Contact
