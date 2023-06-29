import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p className="footer-paragraph">
          Nazwa firmy - wszystkie prawa zastrzeżone, 2019
        </p>
        <div className="icons">
          <FontAwesomeIcon className="fa-instagram" icon={faFacebookSquare} />
          <FontAwesomeIcon className="fa-square-facebook" icon={faInstagram} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
