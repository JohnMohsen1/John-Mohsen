import Imgs from "./workImgs";

function WorkSection () {
    return (
        <>
        <section className="workProjects" id="Projects">
            <div className="workProjectsText">
                <h1>Designs</h1>
                <p>A small gallery of 100 designs created for various companies & organizations.</p>
            </div>
            <div className="mainWorksCintainer">
                <div className="workProjectsBtns">
                <button className="allDesingsBtn btn">All Designs</button>
                <button className="companiesDesigns btn">Companies &amp; Organizations</button>
                <button className="ManipulationDesings btn">Manipulation Designs</button>
                </div>
                <div className="workProjectsImages" id="imported-div">
                    <Imgs />
                </div>
            </div>
        </section>

        <section className="projectShowContainer" id="project-modal">
        <div className="projectShow">
            <span className="closeBtn">×</span>
            <div className="scrollable-content">
                <h3 id="project-title"></h3>
                <img src="_" id="project-image" alt="" />
            </div>
        </div>
        </section>
        </>
    )
}

export default WorkSection;