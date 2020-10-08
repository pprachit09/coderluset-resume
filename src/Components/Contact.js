import React from 'react'
import PropTypes from 'prop-types'

const Contact = ({ data }) => {
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
          <form action="" method="post" id="contactForm" name="contactForm">
            <fieldset>
              <div>
                <label htmlFor="contactName">
                  Name <span className="required">*</span>
                </label>
                <input
                  type="text"
                  defaultValue=""
                  size="35"
                  id="contactName"
                  name="contactName"
                />
              </div>
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
                ></textarea>
              </div>

              <div>
                <button className="submit">Submit</button>
                <span id="image-loader">
                  <img alt="" src="images/loader.gif" />
                </span>
              </div>
            </fieldset>
          </form>

          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i>Your message was sent, thank you!
            <br />
          </div>
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
