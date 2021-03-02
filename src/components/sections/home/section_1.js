import React, { useState } from "react";
import classNames from "classnames";
import { SectionProps } from "../../../utils/SectionProps";
import ButtonGroup from "../../elements/ButtonGroup";
import Button from "../../elements/Button";
import Image from "../../elements/Image";
import Modal from "../../elements/Modal";

const propTypes = {
  ...SectionProps.types,
};

const defaultProps = {
  ...SectionProps.defaults,
};

const Hero = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {
  const [videoModalActive, setVideomodalactive] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setVideomodalactive(true);
  };

  const closeModal = (e) => {
    e.preventDefault();
    setVideomodalactive(false);
  };

  const outerClasses = classNames(
    "section section-padding-s fl-ce",
    topOuterDivider && "has-top-divider",
    bottomOuterDivider && "has-bottom-divider",
    hasBgColor && "has-bg-color",
    invertColor && "invert-color",
    className
  );

  const innerClasses = classNames(
    "hero-inner section-inner",
    topDivider && "has-top-divider",
    bottomDivider && "has-bottom-divider"
  );

  return (
    <section
      {...props}
      className={outerClasses}
      style={
        {
          /*paddingTop: "10em"*/
        }
      }
    >
      <div
        className="text-container hero-content text-align-start"
        style={{ fontFamily: "Din Medium" }}
      >
        <h1 className="mt-0 mb-32 reveal-from-bottom" data-reveal-delay="200">
          اللِّسَانُ العَرَبِيُّ
        </h1>
        <div className="container-xs">
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            تطبيق رقمي لتعليم اللغة العربية للناطقين بغيرها.
          </p>
          <p className="m-0 mb-12 reveal-from-bottom" data-reveal-delay="400">
            اتجاه حديث في تعليم العربية
          </p>
          <p
            className="mb-32 reveal-from-bottom"
            data-reveal-delay="400"
            style={{ color: "#f9a61a" }}
          >
            "وَهَذَا لِسَانٌ عَرَبِيٌّ مُّبِينٌ"
          </p>
          <div className="reveal-from-bottom" data-reveal-delay="600">
            <ButtonGroup>
              <Button tag="a" color="primary" wideMobile href="#">
                إبدأ التعلم
              </Button>
            </ButtonGroup>
          </div>
        </div>
      </div>
      <div
        className="img-container reveal-from-bottom illustration-element-01"
        data-reveal-value="20px"
        data-reveal-delay="400"
      >
        <Image
          className="has-shadow"
          src={require("../../../assets/images/student.png")}
          alt="Hero"
          width={896}
          height={504}
        />
      </div>
      <Modal
        id="video-modal"
        show={videoModalActive}
        handleClose={closeModal}
        video="https://player.vimeo.com/video/174002812"
        videoTag="iframe"
      />
    </section>
  );
};

Hero.propTypes = propTypes;
Hero.defaultProps = defaultProps;

export default Hero;
