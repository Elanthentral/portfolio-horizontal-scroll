import React from "react";
import Card from "../ui/card";
import Title from "../ui/Title";
import "./contactform.css";

function ContactForm() {
  return (
    <div className="">
      <Card CardTitle="Get" spantext="In Touch">
        <div className="border py-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62694.828682502884!2d78.67792835080004!3d10.85510747057672!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baaf5d38807dbd3%3A0x6fc3d1a428e19458!2sSrirangam%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1677137589378!5m2!1sen!2sin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="mb-3"
          ></iframe>
          <div className="row">
            <div className="col-6">
              <div className="row">
                <div className="col-6">
                  <p className="about-badge bg-altprimary">
                    Residence. . . . .
                  </p>
                </div>
                <div className="col-6">
                  <p className="text-nowrap">India TamilNadu</p>
                </div>
              </div>
            </div>
            <div className="col-6">
              <div className="row">
                <div className="col-5">
                  <p className="about-badge bg-altprimary">Email . . . . .</p>
                </div>
                <div className="col-7">
                  <p className="text-nowrap">ethentral@gmail.com </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-3">
            <div className="col-6">
              <div className="row ">
                <div className="col-6">
                  <p className="about-badge bg-altprimary">Phone. . . . .</p>
                </div>
                <div className="col-6">
                  <p className="text-nowrap ">+91 9994195740</p>
                </div>
              </div>
            </div>
            <div className="col-6 ">
              <div className="row">
                <div className="col-5">
                  <p className="about-badge text-nowrap bg-altprimary">
                    Freelance. . . . .
                  </p>
                </div>
                <div className="col-7">
                  <p className="text-nowrap">Available</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Title CardTitle="Contact" spantext="Form" />
        <div className="border py-4">
          <div className="d-flex gap-4 ">
            <input placeholder="Name" className="form-control" />
            <input placeholder="Email" className="form-control" />
          </div>
          <div className=" mt-3">
            <textarea placeholder="Message" className="form-control" />
          </div>
          <div className="d-flex justify-content-center">
            <button className="btn btn-altprimary mt-3 w-40 text-white">
              Send
            </button>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default ContactForm;
