import emailjs from "@emailjs/browser";
import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import SendIcon from "@mui/icons-material/Send";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Button } from "@mui/material";
import React, { useRef, useState } from "react";
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

// social media link
const socialMedia = [
  {
    icone: <FacebookIcon className="socialMediaSingelIcon mx-1" />,
    link: "#",
  },
  {
    icone: <InstagramIcon className="socialMediaSingelIcon mx-1" />,
    link: "#",
  },
  {
    icone: <TwitterIcon className="socialMediaSingelIcon mx-1" />,
    link: "#",
  },
  {
    icone: <LinkedInIcon className="socialMediaSingelIcon mx-1" />,
    link: "#",
  },
  {
    icone: <GitHubIcon className="socialMediaSingelIcon mx-1" />,
    link: "#",
  },
];

export default function ContactMe() {
  const form = useRef();

  // for error
  const [error, setError] = useState({
    status: false,
    msg: "",
  });

  // get user name
  const [uName, setUName] = useState("");

  // get user email
  const [uEmail, setUEmail] = useState("");

  // get user subject
  const [uSubject, setUSubject] = useState("");

  //get user message
  const [uMessage, setUMessage] = useState("");

  // fetch to email js
  const sendEmail = (e) => {
    // for no reload this page
    e.preventDefault();

    // valid the input box

    if (uName === "" || uEmail === "" || uSubject === "" || uMessage === "") {
      console.log("this is inside the ");

      setError({
        status: true,
        msg: "Please fill up the form ",
      });
    } else {
      // post email js
      emailjs
        .sendForm(
          "service_8wntot9",
          "template_5an818b",
          form.current
          // "hgI0RLZmstkLlop_B"
        )
        .then(
          (result) => {
            //  console.log(result.text);
          },
          (error) => {
            //    console.log("from email js : ", error.text);
            // error show
            setError({
              state: "true",
              msg: `${error.text}.Please try again`,
            });
          }
        );
    }
  };

  return (
    <ContactMeBackground className="mb-5 pb-5">
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
            <form ref={form} onSubmit={sendEmail}>
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
                  name="user_name"
                  onChange={(e) => setUName(e.target.value)}
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
                  name="user_email"
                  onChange={(e) => setUEmail(e.target.value)}
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
                  onChange={(e) => setUSubject(e.target.value)}
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
                  rows="6"
                  name="message"
                  onChange={(e) => setUMessage(e.target.value)}
                ></textarea>
              </div>
              <div>
                {error.status === true && (
                  <div
                    class="alert alert-danger d-flex justify-content-center"
                    role="alert"
                  >
                    <div>{error.msg}</div>
                  </div>
                )}
              </div>

              <div class="d-flex justify-content-between">
                {" "}
                <div>
                  <div className="socialMediaIcon">
                    {socialMedia.map((dt) => dt.icone)}
                  </div>
                </div>
                <div>
                  <Button
                    className="px-5 p-2"
                    color="error"
                    variant="outlined"
                    endIcon={<SendIcon />}
                    atype="submit"
                    value="Send"
                    type="submit"
                  >
                    <b>Submit</b>
                  </Button>
                </div>
              </div>
            </form>
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
  .socialMediaSingelIcon {
    background-color: black;
    border-radius: 50%;
    padding: 4px;
    color: #f8f9fc;
    font-size: 39px;
    cursor: pointer;
    -webkit-transition: 0.5s;
    transition: 0.5s;
  }

  .socialMediaSingelIcon:hover {
    background-color: #f9004d;
    margin-top: -20px;
  }
`;
