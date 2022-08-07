import React, { useState } from "react";
import styled from "styled-components";
import PorfileImage from "../Asset/profileImage.jpg";

export default function AboutMe() {
  // for selected option
  const [selectOption, setSelectOption] = useState("Main skills");

  return (
    <AboutMeBackground className="">
      <div className="mt-5 pt-5 pb-5 container">
        <div className="mt-5 pt-5 tital-for-contact-me d-flex justify-content-center">
          <h3>
            <b>
              About <span style={{ color: "#f9004d" }}>Me</span>
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
        <div class="d-flex justify-content-center">
          {" "}
          <div className="row">
            <div className=" col-lg-6 col-md-6 col-sm-12">
              <img
                width={"100%"}
                src={PorfileImage}
                class="img-fluid rounded"
                alt="..."
              />
            </div>
            <div className=" col-lg-6 col-md-6 col-sm-12 p-4">
              <div>
                <h1 className="fw-bold" style={{ color: "#f9004d" }}>
                  Jone Doe
                </h1>
              </div>
              <div>
                <span className="Aboutme-des">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Sapiente hic, saepe corporis facilis! Beatae ipsa nesciunt
                  officiis cupiditate, ipsum adipisci non est, sit ex molestiae
                  doloremque laborum velit veritatis, laboriosam hic corporis
                  unde modi earum? Cum, laudantium! In dolore suscipit
                  recusandae incidunt fugit.
                </span>
              </div>
              <div className="mt-3 ">
                <div className="">
                  <div class=" AboutmeOption">
                    {" "}
                    <div className="d-flex justify-content-between AboutmeOptionD-flex">
                      <div
                        className="AboutmeSingleOption"
                        onClick={() => {
                          setSelectOption("Main skills");
                        }}
                      >
                        <div>
                          <span
                            className={
                              selectOption === "Main skills"
                                ? `AboutmeOption-text activeOptionText`
                                : `AboutmeOption-text`
                            }
                          >
                            Main skills
                          </span>
                        </div>
                        <div>
                          {" "}
                          <hr
                            className={
                              selectOption === "Main skills"
                                ? `AboutmeOption-hr activeOptionHr`
                                : `AboutmeOption-hr`
                            }
                          />{" "}
                        </div>
                      </div>
                      <div
                        className="AboutmeSingleOption"
                        onClick={() => {
                          setSelectOption("Awards");
                        }}
                      >
                        <div>
                          <span
                            className={
                              selectOption === "Awards"
                                ? `AboutmeOption-text activeOptionText`
                                : `AboutmeOption-text`
                            }
                          >
                            Awards
                          </span>
                        </div>
                        <div>
                          {" "}
                          <hr
                            className={
                              selectOption === "Awards"
                                ? `AboutmeOption-hr activeOptionHr`
                                : `AboutmeOption-hr`
                            }
                          />{" "}
                        </div>
                      </div>
                      <div
                        className="AboutmeSingleOption"
                        onClick={() => {
                          setSelectOption("Experience");
                        }}
                      >
                        <div>
                          <span
                            className={
                              selectOption === "Experience"
                                ? `AboutmeOption-text activeOptionText`
                                : `AboutmeOption-text`
                            }
                          >
                            Experience
                          </span>
                        </div>
                        <div>
                          {" "}
                          <hr
                            className={
                              selectOption === "Experience"
                                ? `AboutmeOption-hr activeOptionHr`
                                : `AboutmeOption-hr`
                            }
                          />{" "}
                        </div>
                      </div>
                      <div
                        className="AboutmeSingleOption"
                        onClick={() => {
                          setSelectOption("Education & Certification");
                        }}
                      >
                        <div>
                          <span
                            className={
                              selectOption === "Education & Certification"
                                ? `AboutmeOption-text activeOptionText`
                                : `AboutmeOption-text`
                            }
                          >
                            Education & Certification
                          </span>
                        </div>
                        <div>
                          {"  "}
                          <hr
                            className={
                              selectOption === "Education & Certification"
                                ? `AboutmeOption-hr activeOptionHr`
                                : `AboutmeOption-hr`
                            }
                          />{" "}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div style={{ color: "rgb(152 154 163)" }}>
                    {selectOption === "Main skills" && (
                      <div>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Possimus beatae non molestias, tempora nostrum
                        vero tempore autem nulla dolorem quaerat sed quas
                        veritatis sunt deserunt repudiandae optio expedita
                        voluptatum vel accusantium numquam odit officia nobis
                        placeat sapiente! Perspiciatis blanditiis eos velit
                        aliquam eum esse eligendi doloremque cumque, nostrum
                        incidunt nemo libero error, repudiandae placeat alias
                        quam rerum vitae sapiente voluptatum ab ad
                        necessitatibus ex? Vitae sed minima sapiente ipsam
                        similique, magnam odio culpa expedita vero officia
                        incidunt consequatur veniam corrupti molestias et iure.
                        Veritatis, dolore error? Corporis, molestias! Quidem
                        necessitatibus deleniti a autem numquam expedita alias
                        nobis quasi sed velit.
                      </div>
                    )}
                    {selectOption === "Awards" && (
                      <div>
                        cidunt nemo libero error, repudiandae placeat alias quam
                        rerum vitae sapiente voluptatum ab ad necessitatibus ex?
                        Vitae sed minima sapiente ipsam similique, magnam odio
                        culpa expedita vero officia incidunt consequatur veniam
                        corrupti molestias et iure. Veritatis, dolore error?
                        Corporis, molestias! Quidem necessitatibus deleniti a
                        autem numquam expedita alias nobis quasi sed
                        velit.lorem2.. Lorem, ipsum dolor sit amet consectetur
                        adipisicing elit. Reiciendis ullam repudiandae ipsam
                        consectetur in doloremque facere nesciunt doloribus ad,
                        illo quis deleniti, iusto rerum consequatur hic omnis
                        harum possimus molestiae.
                      </div>
                    )}
                    {selectOption === "Experience" && (
                      <div>
                        dolorem quaerat sed quas veritatis sunt deserunt
                        repudiandae optio expedita voluptatum vel accusantium
                        numquam odit officia nobis placeat sapiente!
                        Perspiciatis blanditiis eos velit aliquam eum esse
                        eligendi doloremque cumque, nostrum incidunt nemo libero
                        error, repudiandae placeat alias quam rerum vitae
                        sapiente voluptatum ab ad necessitatibus ex? Vitae sed
                        minima sapiente ipsam similique, magnam odio culpa
                        expedita vero officia incidunt
                      </div>
                    )}
                    {selectOption === "Education & Certification" && (
                      <div>
                        similique, magnam odio culpa expedita vero officia
                        incidunt consequatur veniam corrupti molestias et iure.
                        Veritatis, dolore error? Corporis, molestias! Quidem
                        necessitatibus deleniti a autem numquam expedita alias
                        nobis quasi sed velit. Lorem ipsum dolor sit amet
                        consectetur adipisicing elit. Placeat porro repellendus,
                        debitis nulla aliquam dignissimos fugit sunt quis
                        aspernatur temporibus quos tempora, a sit quibusdam
                        provident distinctio consequatur animi architecto atque
                        hic reprehenderit unde. Expedita, dolorem repellendus.
                        Quas doloremque ratione error blanditiis eum consectetur
                        necessitatibus, cum enim quae voluptatibus consequuntur
                        nihil praesentium numquam optio iusto quia est quam
                        soluta autem beatae explicabo aperiam reprehenderit.
                        Quaerat ut aliquid quos delectus optio at, sunt
                        asperiores laudantium error voluptatem vitae adipisci
                        veniam nostrum perferendis necessitatibus placeat ab
                        quas, eaque facere. Ad unde, facilis repellat eos
                        dolorum corporis laudantium nam delectus, aliquid, rem
                        nesciunt.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutMeBackground>
  );
}

const AboutMeBackground = styled.div`
  background-color: #f8f9fc;

  .Aboutme-des {
    font-weight: 400;
  }
  .AboutmeOption {
    font-weight: bold;
    font-size: 18px;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
  }
  .AboutmeOption-text {
    padding: 0px;
    cursor: pointer;
  }
  .AboutmeOption-hr {
    margin-top: 10px;
    height: 7px;
    background-color: #000000;
    width: 50%;
    transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1) 0s;
    border: none;
    border-radius: 5px;
  }
  .activeOptionText {
    color: red;
  }
  .activeOptionHr {
    background-color: red;
    opacity: 60%;
    width: 100%;
  }
  @media only screen and (max-width: 768px) {
    .AboutmeOptionD-flex {
      display: flex !important;
      flex-wrap: nowrap !important;
      flex-direction: column !important;
    }
  }
`;
