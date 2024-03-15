import troubleImage from '../images/Trouble.png';
import "../styles/PageNotFound.css";

const PageNotFound = () => {
    return (
        <div id="error-container">
            <div id='message-container'>
                <h1>404 not found</h1>
                <p>Lost there, buddy?</p>
            </div>
            <img src={troubleImage} alt="" />
        </div>
    );
}

export default PageNotFound;

