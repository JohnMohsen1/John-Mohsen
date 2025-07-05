"use client"

import HoverIcon from "./lottie/lottie_icons"
import HomeIcon from "./lottie/icons/system-solid-41-home-morph-home-3.json"
import InfoIcon from "./lottie/icons/system-solid-28-info-hover-info.json"
import SkillsIcon from "./lottie/icons/wired-flat-2844-magic-wand-hover-pinch.json"
import workIcon from "./lottie/icons/system-solid-178-work-hover-work.json"

export default function HeroHeaderCircle () {
    return (
        <>
            <div className="heroHeaderCircleContainer">
          <span className="heroHeaderCircle" id="menucircle">
            <img src="./hero_imgs/menuWhite.png" alt="" />
          </span>

          <a href="#Home">
            <span className="heroHeaderCircle" id="homecircle" title="Home">
            <div className="hoverIconsHome"><HoverIcon icon={HomeIcon} size={40}/></div>
            </span>
          </a>

          <a href="#About">
            <span className="heroHeaderCircle" id="aboutcircle" title="About Me">
            <div className="hoverIconsInfo"><HoverIcon icon={InfoIcon} size={40}/></div>
            </span>
          </a>

          <a href="#Skills">
            <span className="heroHeaderCircle" id="workcircle" title="Skills">
            <div className="hoverIconskills"><HoverIcon icon={SkillsIcon} size={40}/></div>
            </span>
          </a>

          <a href="#Projects">
            <span className="heroHeaderCircle" id="contactcircle" title="Designs">
            <div className="hoverIconWorks"><HoverIcon icon={workIcon} size={40}/></div>
            </span>
          </a>

          <span className="heroHeaderCircle" id="closecircle">
            <img src="./hero_imgs/close.png" alt="" />
          </span>
        </div>
        </>
    )
}
