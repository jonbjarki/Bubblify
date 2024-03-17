import NavigationBar from "./NavigationBar";
import "../styles/AboutUs.css";
import BubblesImage2 from "../images/Bubbles1.jpg";
import BubblesImage1 from "../images/Bubbles2.webp";

const AboutUs = () => {
  return (
    <>
    <NavigationBar />
    <div id="about-container">
      <div id="title-container">
        <div id="upper-title">
          <h1>Welcome to Bubblify</h1>
        </div>
        <div id="lower-title">
          <h2>The new powerhouse in the bubble industry!</h2>
        </div>
      </div>
      <div className="img-section">
        <img src={BubblesImage1} alt="" />
        <p>At Bubblify, we understand the magic that bubbles bring to people of all ages. 
          They inspire joy, spark imagination, and create unforgettable moments. That's why 
          we've made it our mission to deliver bubbles that exceed expectations, bringing 
          smiles to faces and delight to hearts.</p>
      </div>
      <div className="img-section">
        <p> Bubblify is more than just a company – we're a community. We're here to 
          collaborate, innovate, and celebrate the joy of bubbles together. Whether you're 
          a parent, a teacher, an event planner ... or simply someone who loves bubbles ...
           we invite you to join us on this exciting journey.</p>
          <img src={BubblesImage2} alt="" />
      </div>
      <div id="contact-section">
        <div id=""></div>
        <h2>We'd love to hear from you</h2>
        <p>Don't be shy, give us a call. We can talk about whaterver you want (but preferably bubbles) ...</p>
      </div>
    </div>
    </>
  );
}

export default AboutUs;