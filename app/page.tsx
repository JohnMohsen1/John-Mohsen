import React from "react";
import NavBar from "./mainComponents/topNav"
import HeroSection from "./mainComponents/heroSection.jsx"
import AboutSection from "./mainComponents/aboutSection"
import SkillSection from "./mainComponents/skillSection"
import WorkSection from "./mainComponents/Works/imgsSection"
import ContactSection from "./mainComponents/contactSection"


export default function Home() {
  return (
  <>
    <div className="main">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillSection />
      <WorkSection />
      <ContactSection />

      <div className="rights">
        <p>John Designs © 2025. All rights reserved</p>
      </div>
    </div>
  </>  
  );
}
