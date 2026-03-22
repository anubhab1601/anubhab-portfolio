import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech in CSE (AI & ML)</h4>
                <h5>C.V. Raman Global University</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Currently pursuing a B.Tech with an excellent CGPA of 8.94. Developing a strong foundation in AI/ML, full-stack development, and data structures.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Team Lead & Full-Stack Developer</h4>
                <h5>Smart India Hackathon 2025</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Led a 6-member team "Samadhan Bandhu" to victory among 1,000+ teams at the National Grand Finale. Developed a centralized Smart Automation dashboard using the MERN stack.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
