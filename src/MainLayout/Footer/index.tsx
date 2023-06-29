import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";
import Styles from  "./Footer.module.css"

export const Footer = () => {
  return (
    <nav>
      <footer className={Styles.footer}>
        <h3 className={Styles.Text}> Follow Us </h3>
        <ul className={Styles.social_list}>
        
          <li >
            <Link to="https://www.facebook.com/" target="_blank">
              <FaFacebook/>
            
            </Link>
          </li >
          <li className={Styles.li}>
            <Link to="https://www.instagram.com/" target="_blank">
              <FaInstagram />
            </Link>
          </li>
          <li className={Styles.li}>
            <Link to="https://www.youtube.com/" target="_blank">
              <FaYoutube />
            </Link>
          </li>
        </ul>

        <p>
        © 2023
        </p>
      </footer>
    </nav>
  );
};
