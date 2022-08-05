import React, { useEffect, useState } from "react";
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

import logoDesignimg4 from "../Asset/logodesign/dp-portfolio-04.jpg";
import logoDesignimg5 from "../Asset/logodesign/dp-portfolio-05.jpg";
import logoDesignimg6 from "../Asset/logodesign/dp-portfolio-06.jpg";
import logoDesignimg7 from "../Asset/logodesign/dp-portfolio-07.jpg";
import logoDesignimg8 from "../Asset/logodesign/dp-portfolio-08.jpg";
import logoDesignimg9 from "../Asset/logodesign/dp-portfolio-09.jpg";

import mobileDesignimg6 from "../Asset/mobile app/dp-portfolio-06.jpg";
import mobileDesignimg7 from "../Asset/mobile app/dp-portfolio-07.jpg";
import mobileDesignimg8 from "../Asset/mobile app/dp-portfolio-08.jpg";
import mobileDesignimg9 from "../Asset/mobile app/dp-portfolio-09.jpg";
import mobileDesignimg10 from "../Asset/mobile app/dp-portfolio-10.jpg";
import mobileDesignimg11 from "../Asset/mobile app/dp-portfolio-11.jpg";

import webDesignimg6 from "../Asset/web design/dp-portfolio-06.jpg";
import webDesignimg7 from "../Asset/web design/dp-portfolio-07.jpg";
import webDesignimg8 from "../Asset/web design/dp-portfolio-08.jpg";
import webDesignimg9 from "../Asset/web design/dp-portfolio-09.jpg";
import webDesignimg10 from "../Asset/web design/dp-portfolio-10.jpg";
import webDesignimg11 from "../Asset/web design/dp-portfolio-11.jpg";

const option = ["All Subject", "Web Design", "Logo Design", "Mobile App"];

const AllSubject = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

const LogoDesign = [
  logoDesignimg4,
  logoDesignimg5,
  logoDesignimg6,
  logoDesignimg7,
  logoDesignimg8,
  logoDesignimg9,
];

const MobileApp = [
  mobileDesignimg6,
  mobileDesignimg7,
  mobileDesignimg8,
  mobileDesignimg9,
  mobileDesignimg10,
  mobileDesignimg11,
];

const WebDesign = [
  webDesignimg6,

  webDesignimg7,
  webDesignimg8,
  webDesignimg9,
  webDesignimg10,
  webDesignimg11,
];

export default function PortfolioComponent() {
  // for user select option
  const [selectOption, setSelectOption] = useState("All Subject");

  //for select image
  const [selectImage, setSelectImage] = useState(AllSubject);

  useEffect(() => {
    if (selectOption === "All Subject") {
      setSelectImage(AllSubject);
    } else if (selectOption === "Web Design") {
      setSelectImage(WebDesign);
    } else if (selectOption === "Logo Design") {
      setSelectImage(LogoDesign);
    } else if (selectOption === "Mobile App") {
      setSelectImage(MobileApp);
    }
  }, [selectOption]);

  return (
    <PortfolioComponentBackground className="container mt-5 pt-5">
      <div className="d-flex justify-content-center ">
        <div className="optionBar p-4 mb-5 ">
          {option.map((op) => (
            <span
              className={
                selectOption === op ? "p-3 active-Option " : "p-3 single-option"
              }
              onClick={() => setSelectOption(op)}
            >
              {op}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-3 imageSec row">
        {selectImage.map((img) => (
          <div className="mb-5 col-lg-4 col-md-6 col-sm-12">
            <div>
              <img src={img} alt="" />
            </div>

            <div className="mt-3 imageTitleAndDes">
              <div className="imgTitle">
                <span>Lorem, ipsum </span>
              </div>
              <div className="imageDes mt-2">
                <h4>T-shirt design is the popular design for digital market</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PortfolioComponentBackground>
  );
}

const PortfolioComponentBackground = styled.div`
  font-size: poppins;
  .optionBar {
    border-radius: 5px;
    background-color: #fff8fa;
    border-radius: 5px;
  }
  .single-option {
    cursor: pointer;
  }
  .active-Option {
    color: red;
    border-bottom: 3px solid red;
    cursor: pointer;
  }
  .imageSec img {
    border-radius: 5px;
    width: 100%;
  }
  .imageTitleAndDes {
  }
  .imgTitle {
    font-size: 16px;
    font-weight: 400;
  }
  .imageDes {
  }
`;
