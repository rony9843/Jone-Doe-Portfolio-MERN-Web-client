import React from "react";
import styled from "styled-components";

export default function ContactMe() {
  return (
    <ContactMeBackground className="">
      <div className="container">
        <div className="mt-5 pt-5 tital-for-contact-me d-flex justify-content-center">
          <h3>
            <b>
              Contact <span style={{ color: "#f9004d" }}>Me</span>
            </b>
            <hr
              style={{
                backgroundColor: "#f9004d",
                height: "4px",
                borderRadius: "10px",
              }}
            />
          </h3>
        </div>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. At illo
            nemo aliquam dolorum exercitationem assumenda dolor magnam
            cupiditate quod quidem quibusdam provident ut odio, ducimus sit eos
            aliquid odit mollitia incidunt. Numquam nesciunt dolorum, ducimus
            impedit saepe fuga provident optio sequi obcaecati iure ipsam
            aspernatur consectetur dignissimos est. Vel saepe illum aliquam
            autem possimus neque, excepturi accusantium explicabo delectus a
            magnam. Quam modi, quaerat obcaecati asperiores qui eius recusandae
            ullam libero doloremque vel aliquam! Ipsam, sint id, laborum maiores
            est excepturi quam temporibus nulla unde dolore ut vitae pariatur
            aperiam quo, aut veritatis. Dolorem neque vero vel eaque, voluptates
            sed laborum n
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12">
            <div class="mb-3">
              <label for="UserName" class="form-label">
                Your{" "}
                <span>
                  <b style={{ color: "#f9004d" }}>Name</b>
                </span>
              </label>
              <input
                type="text"
                class="form-control"
                id="UserName"
                placeholder="enter your name "
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlInput1" class="form-label">
                <span>
                  <b style={{ color: "#f9004d" }}>Email </b>
                </span>
                address
              </label>
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              />
            </div>
            <div class="mb-3">
              <label for="subject" class="form-label">
                Write a{" "}
                <span>
                  <b style={{ color: "#f9004d" }}>Subject</b>
                </span>
              </label>
              <input
                type="text"
                class="form-control"
                id="subject"
                placeholder="subject"
              />
            </div>
            <div class="mb-3">
              <label for="exampleFormControlTextarea1" class="form-label">
                Your{" "}
                <span>
                  <b style={{ color: "#f9004d" }}>Message</b>
                </span>
              </label>
              <textarea
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </ContactMeBackground>
  );
}

const ContactMeBackground = styled.div`
  background-color: #f8f9fc;
  .form-control {
    border: 1px solid #f9004d;
  }
`;
