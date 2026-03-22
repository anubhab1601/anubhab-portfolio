import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              ANUBHAB
              <br />
              <span>MISHRA</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3 style={{ position: 'relative', height: '30px' }}>
              <div className="landing-h3-1" style={{ position: 'absolute' }}>I am an</div>
              <div className="landing-h3-2" style={{ position: 'absolute' }}>I am a</div>
              <div className="landing-h3-3" style={{ position: 'absolute' }}>I am an</div>
            </h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">ML</div>
              <div className="landing-h2-2">Full-Stack</div>
              <div className="landing-h2-3">AI</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Engineer</div>
              <div className="landing-h2-info-1">Developer</div>
              <div className="landing-h2-info-2">Researcher</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
