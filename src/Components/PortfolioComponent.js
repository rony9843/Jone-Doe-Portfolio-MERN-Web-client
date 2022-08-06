import React, { useEffect, useState } from "react";
import Modal from "react-modal";
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

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    maxWidth: "45%",

    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export default function PortfolioComponent() {
  // react modal
  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // react modal image src
  const [modalImage, setModalImage] = useState();

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    subtitle.style.color = "#f00";
  }

  function closeModal() {
    setIsOpen(false);
  }

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
      <div className="d-flex justify-content-center  ">
        <div className="optionBar row  p-4 mb-5 d-flex justify-content-center">
          {option.map((op) => (
            <div className=" optionList col-lg-3 col-md-3  ">
              <span
                className={
                  selectOption === op
                    ? "pb-3 active-Option "
                    : "pb-3 single-option"
                }
                onClick={() => setSelectOption(op)}
              >
                {op}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-3 imageSec row">
        {selectImage.map((img) => (
          <div className=" mb-5 col-lg-4 col-md-6 col-sm-12">
            <div>
              <img
                onClick={() => {
                  openModal();
                  setModalImage(img);
                }}
                className="hoverImage"
                src={img}
                alt=""
              />
              <div></div>
            </div>

            <div className="mt-3 imageTitleAndDes">
              <div className="imgTitle">
                <span>Lorem, ipsum </span>
              </div>
              <div className="imageDes mt-2">
                <span>
                  T-shirt design is the popular design for digital market
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Modal
        isOpen={modalIsOpen}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div class="d-flex justify-content-end">
          {" "}
          <h4 onClick={closeModal} style={{ color: "red", cursor: "pointer" }}>
            X
          </h4>
        </div>
        <div>
          <Carousel>
            {selectImage.map((img) => (
              <div>
                <img src={modalImage} className="img-fluid ModalImage" alt="" />
              </div>
            ))}
          </Carousel>
        </div>
      </Modal>
    </PortfolioComponentBackground>
  );
}

const PortfolioComponentBackground = styled.div`
  font-size: poppins;
  .optionBar {
    border-radius: 5px;
    background-color: #fff8fa;
    border-radius: 5px;
    width: 570px;
  }
  .optionList {
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
    box-shadow: 0 25px 65px rgb(0 0 0 / 10%);
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    cursor: pointer;
  }
  .imageTitleAndDes {
  }
  .imgTitle {
    font-size: 16px;
    font-weight: 400;
  }
  .imageDes {
    font-size: 20px;
    font-weight: 600;
  }
  .hoverImage:hover {
    margin-top: -20px;
  }
  .ModalImage {
    width: 50%;
  }

  @media only screen and (max-width: 771px) {
    .optionList {
      width: 50%;
      padding: 20px 0px;
      text-align: center;
    }
    .optionBar span {
      padding: 16px 10px;
    }
    .ModalImage {
      width: 95%;
    }
  }
`;
