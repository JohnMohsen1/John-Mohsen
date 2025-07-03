"use client"

import lottie from 'lottie-web';
import { defineElement } from 'lord-icon-element';

// define "lord-icon" custom element with default properties
defineElement(lottie.loadAnimation);

const HeroSection = () => {

  return (
    <div className="mainSection">
      <section className="homeSection">
        <div className="homeSectionText">
          <h1>Hi, I'm John Mohsen</h1>
          <h2 style={{ fontWeight: 300 }}>Graphic Designer</h2>
          <p>
            I am a passionate graphic designer with strong expertise in Adobe Creative Suite,
            including Photoshop, Illustrator, and InDesign. I specialize in creating visually compelling designs
            that communicate clearly and resonate with target audiences across digital and print media. As a professional
            AI user, I leverage cutting-edge tools to streamline design workflows and elevate the quality of my creative output.
            My work consistently enhances brand identity and delivers impactful visual solutions. I’m driven by the challenge of
            turning creative ideas into polished, professional designs that inspire and engage.
          </p>
          <button className="resume btn"> 
            <div>
              <img src="./hero_imgs/youtube.svg" alt=""/>
              <a href='https://youtube.com/@johnmohsen1?si=nBXej-LhUAt1ieiD' target='_blank'>
              Visit my YouTube channel
              </a>
            </div>
          </button>
        </div>

        <div className="homeSectionImage">
          <img src="./hero_imgs/herpPic.png" alt="" className="heroPic" />
        </div>

        <div className="heroHeaderCircleContainer">
          <span className="heroHeaderCircle" id="menucircle">
            <img src="./hero_imgs/menuWhite.png" alt="" />
          </span>

          <a href="#Home">
            <span className="heroHeaderCircle" id="homecircle" title="Home">
              <lord-icon
                src="https://cdn.lordicon.com/slduhdil.json"
                trigger="morph"
                colors="primary:#ffffff"
                state="morph-2"
              ></lord-icon>
            </span>
          </a>

          <a href="#About">
            <span className="heroHeaderCircle" id="aboutcircle" title="About Me">
              <lord-icon
                src="https://cdn.lordicon.com/ncxoarcp.json"
                trigger="hover"
                colors="primary:#ffffff"
              ></lord-icon>
            </span>
          </a>

          <a href="#Skills">
            <span className="heroHeaderCircle" id="workcircle" title="Skills">
              <lord-icon
                src="https://cdn.lordicon.com/tdbbbqzo.json"
                trigger="hover"
                colors="primary:#ffffff,secondary:#ffffff,tertiary:#ffffff"
              ></lord-icon>
            </span>
          </a>

          <a href="#Projects">
            <span className="heroHeaderCircle" id="contactcircle" title="Designs">
              <lord-icon
                src="https://cdn.lordicon.com/oezixobx.json"
                trigger="hover"
                colors="primary:#ffffff"
                state="hover"
              ></lord-icon>
            </span>
          </a>

          <span className="heroHeaderCircle" id="closecircle">
            <img src="./hero_imgs/close.png" alt="" />
          </span>
        </div>
      </section>
    </div>
  );
};
export default HeroSection;