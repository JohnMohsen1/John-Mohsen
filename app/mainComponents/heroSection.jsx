
import HeroHeaderCircle from "./heroCircleIcons"

const HeroSection = () => {

  return (
    <div className="mainSection">
      <section className="homeSection">
        <div className="homeSectionText">
          <h1>Hi, I'm John Mohsen</h1>
          <h2 style={{ fontWeight: 300 }}>Graphic Designer</h2>
          <p>
            I'm a passionate graphic designer with solid experience in Adobe Creative Suite, 
            including Photoshop, Illustrator, and InDesign. Skilled in creating visually compelling designs
            that communicate clearly and connect with target audiences across digital and print media. 
            Proficient AI user focused on streamlining workflows and enhancing creative output.
             Proven ability to elevate brand identity through impactful visual solutions. Driven by the challenge of turning ideas into polished, professional designs that engage and inspire.
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
        <HeroHeaderCircle/>
      </section>
    </div>
  );
};
export default HeroSection;
