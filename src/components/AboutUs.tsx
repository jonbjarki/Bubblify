import NavigationBar from "./NavigationBar";
import "../styles/AboutUs.css";
import BubblesImage2 from "../images/Bubbles1.jpg";
import BubblesImage1 from "../images/Bubbles2.webp";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';


const AboutUs = () => {
  return (
    <>
    <NavigationBar />
    <div id="about">
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
        <div id="contact-title">        
          <h2>We'd love to hear from you</h2>
          <p>Don't be shy, give us a call. We can talk about whaterver you want (but preferably bubbles) ...</p>
        </div>
        <div id="contact-info">
          <div id="container">
            <FontAwesomeIcon icon={faPhone} id="phone-icon"/>
            <p>6633001</p>
            <div id="vertical-line"></div>
            <FontAwesomeIcon icon={faEnvelope} id="envelope-icon"/>
            <p>email@email.com</p>
          </div>
        </div>
      </div>
      <div id="location-section">
        <div id="title">
          <h2>Location</h2>
          <p>If you're rather a face-to-face type of person, that's fine too. Our factory works around
            the clock making those awsome bubbles, and we're always open to a visit.
          </p>
        </div>
        <div id="map-container">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21372.76826870274!2d70.13768094944633!3d-49.518770071198155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xb314a275905436c7%3A0x4100b021ffae9cbc!2sPort%20Douzieme%2C%20French%20Southern%20and%20Antarctic%20Lands!5e0!3m2!1sen!2sis!4v1710785187693!5m2!1sen!2sis" width="600" height="450" loading="lazy" ></iframe>
        </div>
      </div>


    </div>
    </>
  );
}

export default AboutUs;