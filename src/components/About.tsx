import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Combining deep technical curiosity with strong foundations in <span className="highlight">AI/ML</span>, <span className="highlight">Data Structures</span>, and <span className="highlight">Full-Stack engineering</span>.<br /><br />
          As a National&nbsp;Champion of <span className="highlight">Smart India Hackathon 2025</span> I build resilient microservices and deploy scalable machine learning architectures. Passionate about solving complex problems through research-driven approaches.
        </p>
        
        <div className="about-stats">
          <div className="stat">
            <h4>8.94</h4>
            <span>B.Tech CGPA</span>
          </div>
          <div className="stat">
            <h4>#1</h4>
            <span>National SIH '25 Winner</span>
          </div>
          <div className="stat">
            <h4>10+</h4>
            <span>Complex Projects Shipped</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
