import React, { Component } from "react";
import Footer from "../components/Footer.js";
import Navbar from "../components/Navbar.js";
import Banner from "../components/Banner.js";
class About extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner title="Contact" subtitle="Please contact me at test@test.in" />
        <div className="container">
          <h2>Contact</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            placerat orci eu nulla sagittis, pulvinar dignissim lectus
            consequat. Etiam in lobortis ligula, vitae ornare lacus.
          </p>

          <h2 className="text-center mb-4 textcolor">Get In Touch</h2>
          <p className="lead text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus,
            et.
          </p>

          <form>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Name</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="name"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Phone</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="phone"
                  placeholder="Phone"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Email</label>
              <div className="col-sm-10">
                <input
                  className="form-control"
                  name="email"
                  placeholder="E-mail"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Message</label>
              <div className="col-sm-10">
                <textarea
                  className="form-control"
                  name="text"
                  placeholder="How can we help you?"
                />
              </div>
            </div>

            <div className="form-group row">
              <div className="col-sm-10">
                <button type="submit" className="btn btn-primary">
                  Send
                </button>
              </div>
            </div>
          </form>

          {/* changes */}
        </div>
        <Footer />
      </div>
    );
  }
}

export default About;
