import React from "react";
import logo from "../../public/_gatsby/_image/Images/logo.png";
import { Link } from "gatsby";
import '../styles/footer.css'

const Footer = () => {
  return (
    <footer
      className="text-white p-10 mt-40"
      style={{ backgroundColor: "#303E27" }}
    >
      <div className="footerParent">
        <img className="footerImg" src={logo} alt="Logo" />
        <ul className="flex flex-col space-x-6 leading-8 text-left">
          <li>
            <Link to="/" className="pl-6 font-semibold">
              Confidentialité
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              Conditions d'utilisation
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              Mentions légales
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              Parametrage des cookies
            </Link>
          </li>
        </ul>

        <ul className="flexflex-col space-x-6 leading-8 text-left">
          <li>
            <Link to="/" className="font-semibold pl-6">
              Contacter l'équipe
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              +33.xx.xx.xx.xx
            </Link>
          </li>
          <li>
            <Link to="/" className="font-semibold">
              example@mail.come
            </Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
