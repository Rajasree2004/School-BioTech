import React from "react";
// import AboutBackground from "../Assets/about-background.png";
import { BsFillPlayCircleFill } from "react-icons/bs";
import NewSlider from "./NewSlider";

const About = () => {
  const youtubeChannelURL = "https://www.youtube.com/@st.josephsgroupofinstituti7921/videos";

  return (
    <div className="about-section-container" style={{ marginTop: '8vh' }}>
      {/* <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container" style={{ borderRadius: '3vh', overflow: 'hidden', border: 'none', height: '50vh', marginRight: '5vw' }}>
      <iframe width="100%"
          height="100%" src="https://www.youtube.com/embed/x88M3LOKA6g?si=uGY7-CVQjWGDX1I6&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div> */}
      <NewSlider />
      <div className="right-dept">
      <div className="about-section-text-container" style={{ lineHeight: '1.5' }}>
        {/* <p className="primary-subheading">About</p> */}
        
        <p className="primary-text">- Accredited by NBA Since 2002</p>
        <p className="primary-text">- Anna university recogonized Research centre</p>
        <p className="primary-text">- Lab Equipment worth 1.68 crores</p>
        <p className="primary-text">- MOU with 5 companies / Institutes</p>
        <p className="primary-text">- 3 Anna University Recognized Supervisors</p>
        <p className="primary-text">- 327 Journal Publications</p>
        <p className="primary-text">- 13 patents published and 2 patents awarded </p>
        <p className="primary-text">- Received 1.78 crores Fund from various government organizations </p>
        <p className="primary-text">- 60% students placements and 40% Higher Studies </p>
        <p className="primary-text">- Total 161 Anna University rank holders with 11 gold medals and 10 silver medals </p>
        <div className="about-buttons-container">
          {/* <a href="https://www.stjosephscse.com/#/"
            target="_blank"
            style={{
              color: "white",
              textDecoration: "none",
            }}
            rel="noopener noreferrer" >
            <button className="secondary-button">Home</button>
          </a> */}
          <a
            href={youtubeChannelURL}
            target="_blank"
            rel="noopener noreferrer"
            className="watch-video-button"
            style={{
              textDecoration: "none",
            }}
          >
            <BsFillPlayCircleFill /> Watch Video
          </a>
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;