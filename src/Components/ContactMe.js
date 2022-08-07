import SendIcon from "@mui/icons-material/Send";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import styled from "styled-components";

import img1 from "../Asset/dp-portfolio-01.jpg";
import img2 from "../Asset/dp-portfolio-02.jpg";
import img3 from "../Asset/dp-portfolio-03.jpg";
import img4 from "../Asset/dp-portfolio-04.jpg";
import img5 from "../Asset/dp-portfolio-05.jpg";
import img6 from "../Asset/dp-portfolio-06.jpg";
import img7 from "../Asset/dp-portfolio-07.jpg";
import img8 from "../Asset/dp-portfolio-08.jpg";
import img9 from "../Asset/dp-portfolio-09.jpg";

const AllSubject = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

export default function ContactMe() {
  // get message
  const [userName, setUserName] = useState();

  const getUserName = (props) => {};
  const getUserEmail = (props) => {};
  const getUserSubject = (props) => {};
  const getUserMessaget = (props) => {};

  const submitBtn = () => {};

  return (
    <ContactMeBackground className="mb-4">
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
            <Carousel>
              {AllSubject.map((img) => (
                <div>
                  <img style={{ borderRadius: "10px" }} src={img} alt="" />
                </div>
              ))}
            </Carousel>
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
                onChange={(e) => getUserName(e.target.value)}
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
                onChange={(e) => getUserEmail(e.target.value)}
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
                onChange={(e) => getUserSubject(e.target.value)}
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
                onChange={(e) => getUserMessaget(e.target.value)}
              ></textarea>
            </div>
            <div>
              <div class="alert alert-danger" role="alert">
                A simple warning alert—check it out!
              </div>
            </div>

            <div class="d-flex justify-content-end">
              {" "}
              <Button
                className="px-5"
                color="error"
                variant="outlined"
                endIcon={<SendIcon />}
                onClick={() => submitBtn()}
              >
                Submit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ContactMeBackground>
  );
}

const ContactMeBackground = styled.div`
  .form-control {
    border: 1px solid #f9004d;
  }
`;
