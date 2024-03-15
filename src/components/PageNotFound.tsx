import troubleImage from '../images/Trouble.png';
import "../styles/ErrorElement.css";

const PageNotFound = () => {
    return (
        <div id="error-container">
            <p>Lost there, buddy?</p>
            <img src={troubleImage} alt="" />
        </div>
    );
}

export default PageNotFound;

