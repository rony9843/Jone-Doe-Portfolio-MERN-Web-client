import ProgressBar from "@ramonak/react-progress-bar";
import React from "react";
import styled from "styled-components";
import profileImage from "../Asset/profileImage.jpg";

const SkillList = [
  {
    sName: "Photoshop",
    value: "80",
  },
  {
    sName: "Illustrator",
    value: "70",
  },
  {
    sName: "Adobe XD",
    value: "60",
  },
  {
    sName: "Figma",
    value: "90",
  },
];

export default function MySkillsComponent() {
  return (
    <MySkillsBackgournd className="">
      <div className="container main-sec">
        <div className=" tital-for-contact-me d-flex justify-content-center">
          <h3>
            <b>
              My <span style={{ color: "#f9004d" }}>Skills</span>
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
          <div className="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <img src={profileImage} class="img-fluid" alt="ProfileImage" />
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12">
            <div className="inner-text-right">
              <span></span>
            </div>
            <div className="right-side-title">
              {SkillList.map((dt) => (
                <div className="mt-2">
                  <div>{dt.sName}</div>
                  <div className="">
                    <ProgressBar completed={dt.value} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </MySkillsBackgournd>
  );
}

const MySkillsBackgournd = styled.div`
  background-color: #f8f9fc;

  .main-sec {
    padding: 50px 0;
    margin: 0 auto;
  }
  .main-sec img {
    border-radius: 50%;
    border: 14px solid white;
    width: 300px;

    box-shadow: 0 20px 40px rgb(0 0 0 / 10%),
      0 20px 40px hsl(0deg 0% 100% / 15%);
  }
  .inner-text-right span {
    color: #1f1f25;
    font-size: 15px;
    text-transform: uppercase;
    letter-spacing: 4px;
    display: block;
    margin-bottom: 20px;
  }

  @media only screen and (min-width: 992px) and (max-width: 1200px) {
    .main-sec img {
      width: auto;
      height: auto;
    }
  }
  @media only screen and (max-width: 850px) {
    .inner-text-right {
      margin-top: 35px;
    }
  }

  @media only screen and (max-width: 587px) {
    .main-sec {
      width: 90%;
    }
    .inner-text-right {
      text-align: center;
    }
  }
  @media only screen and (max-width: 477px) {
    .main-sec {
      width: 320px;
      margin: 0px auto;
    }
  }
`;
