import React from "react";
import { useState } from "react";

const FormExterne = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(formData);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div id="mc_embed_signup">
      <form
        action="https://hotmail.us14.list-manage.com/subscribe/post?u=6ce8463b76a0bfa56fc2d399c&amp;id=54836b9956&amp;f_id=00d796e0f0"
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
        className="validate"
        target="_blank"
        noValidate
      >
        <div id="mc_embed_signup_scroll">
          <h2>Subscribe</h2>
          <div className="indicates-required">
            <span className="asterisk">*</span> indicates required
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-EMAIL">
              Email Address <span className="asterisk">*</span>
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              name="EMAIL"
              className="required email"
              id="mce-EMAIL"
              required
            />
            <span id="mce-EMAIL-HELPERTEXT" className="helper_text"></span>
          </div>
          <div className="mc-field-group">
            <label htmlFor="mce-LNAME">Last Name </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              name="LNAME"
              className=""
              id="mce-LNAME"
            />
            <span id="mce-LNAME-HELPERTEXT" className="helper_text"></span>
          </div>
          <div id="mce-responses" className="clear foot">
            <div
              className="response"
              id="mce-error-response"
              style={{ display: "none" }}
            ></div>
            <div
              className="response"
              id="mce-success-response"
              style={{ display: "none" }}
            ></div>
          </div>
          {/* real people should not fill this in and expect good things - do not remove this or risk form bot signups */}
          <div
            style={{ position: "absolute", left: "-5000px" }}
            aria-hidden="true"
          >
            <input
              type="text"
              name="b_6ce8463b76a0bfa56fc2d399c_54836b9956"
              tabIndex="-1"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
            />
          </div>
          <div className="optionalParent">
            <div className="clear foot">
              <input
                type="submit"
                value="Subscribe"
                name="subscribe"
                id="mc-embedded-subscribe"
                className="button"
              />
              <p className="brandingLogo">
                <a
                  href="http://eepurl.com/ip1hFM"
                  title="Mailchimp - email marketing made easy and fun"
                >
                  <img
                    src="https://eep.io/mc-cdn-images/template_images/branding_logo_text_dark_dtp.svg"
                    alt="Mailchimp logo"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormExterne;
