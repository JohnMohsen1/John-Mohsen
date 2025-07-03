
function NavBar () {
    return (
    <>
    <header className="topNavContainer" id="Home">
      <a href="#Home">
        <img src="./hero_imgs/white_logo.png" alt="" className="logo" />
      </a>
      <nav>
        <ul>
          <a href="#Home" className="default"><li>Home</li></a>
          <a href="#About"><li className="navAbout">About me</li></a>
          <a href="#Skills" className="navSkill"><li>Skills & Tools</li></a>
          <a href="#Projects" className="navProjects"><li>Designs</li></a>
        </ul>
        <div className="menuConatiner">
          <img src="./hero_imgs/menuWhite.png" alt="" className="menu" />
        </div>
      </nav>
      <div className="contact">
        <img src="./hero_imgs/envelop.svg" alt="" />
        <a href="#Contact">Contact</a>
      </div>
    </header>
    <div className="menuBox">
      <div className="menuBoxHeader">
        <a href="#Home">
          <img
            src="./hero_imgs/white_logo.png"
            alt=""
            className="logo"
          />
        </a>
        <img src="./hero_imgs/close.png" alt="" className="close" />
      </div>
      <div className="menuBoxText">
        <a href="#Home"><h1>Home</h1></a>
        <a href="#About"><h1>About me</h1></a>
        <a href="#Skills"><h1>Skills & Tools</h1></a>
        <a href="#Projects"><h1>Projects</h1></a>
        <a href="#Contact"><h1>Contact</h1></a>
      </div>
    </div>
    </>
    )
}

export default NavBar;