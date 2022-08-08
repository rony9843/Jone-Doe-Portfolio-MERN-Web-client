import React from "react";
import ProgressBar from "react-animated-progress-bar";
import "react-circular-progressbar/dist/styles.css";
import styled from "styled-components";

export default function CompleteProjectComponent() {
  const PojectCom = [
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

  return (
    <CompletePojectBackground>
      <div className="container">
        <div class="mt-5 pt-3 d-flex justify-content-center">
          <h3>
            <strong>
              Complete <span style={{ color: "#f9004d" }}>Project</span>
            </strong>
            <hr
              style={{
                backgroundColor: "#f9004d",
                height: "4px",
                borderRadius: "10px",
              }}
            />
          </h3>
        </div>
        <div className="container  pt-3 d-flex justify-content-center">
          <div className="row d-flex justify-content-center">
            {PojectCom.map((dt) => (
              <div className="col-lg-3 col-md-3 col-sm-3  PojectComProgressBar">
                <div>
                  <ProgressBar
                    width="230"
                    trackWidth="30"
                    text={`Photoshop`}
                    percentage={`${dt.value}`}
                    value={`10`}
                    maxValue="100"
                    className="ProgressBarClass"
                    defColor={{
                      fair: "orangered",
                      good: "#6a1b9a",
                      excellent: "#f9004d",
                      poor: "#f9004d",
                    }}
                  />
                </div>
                <div>
                  <span
                    className="row d-flex justify-content-center"
                    style={{ color: "#f9004d" }}
                  >
                    {dt.sName}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CompletePojectBackground>
  );
}

const CompletePojectBackground = styled.div`
  .ProgressBarClass {
    background-color: #f9004d;
  }

  @media only screen and (max-width: 575px) {
    .PojectComProgressBar {
      display: flex;
      align-items: center;
      justify-content: space-around;
      background-color: #ffc0cb2b;
      border-radius: 10px;
      margin: 10px 0px;
    }
  }
`;
