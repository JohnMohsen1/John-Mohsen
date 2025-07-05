
"use client"
import { useEffect, useRef } from "react";
import { Rive } from '@rive-app/canvas';

function AboutSection () {

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const riveInstance = useRef<Rive | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const rive = new Rive({
      src: './hero_imgs/designer.riv',
      canvas: canvasRef.current,
      autoplay: true,
    });

    riveInstance.current = rive;

    const resizeCanvas = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        rive.resizeDrawingSurfaceToCanvas();
      }
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      rive.cleanup?.(); // optional cleanup if available
    };
  }, []);


    return (
        <section className="aboutSection" id="About">
            <div className="aboutSectionImage">
              <canvas className="designer" 
                      ref={canvasRef}
                      />
            </div>
            <div className="aboutSectionText">
              <h1 className="aboutTitle">About Me</h1>
              <p>
                I’m John Mohsen, a graphic designer with 5+ years of experience creating visually striking, 
                purposeful designs that communicate effectively. Passionate about delivering real value by understanding each client’s vision 
                and turning ideas into impactful visual content. Committed to building long-term creative partnerships, 
                with experience spanning solo entrepreneurs to large-scale companies.
              </p>
              <div className="analysis">
                <div className="projects">
                  <h1>+500</h1>
                  <p>Design</p>
                </div>
                <div className="clients">
                  <h1>+30</h1>
                  <p>Client</p>
                </div>
                <div className="experience">
                  <h1>+5 years</h1>
                  <p>Experience</p>
                </div>
              </div>
            </div>
          </section>
    )
}

export default AboutSection;
