import React from 'react'
<<<<<<< HEAD
// import logo from "../../public//images/logo.png"
// import { graphql, useStaticQuery } from "gatsby";
// import '../styles/footer.css';


const Footer = () => {
    return (
      <footer className="bg-lime-100">
        {/* <div  className="max-w-7xl h-52 mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img className="h-36" src={logo} alt="Logo"/>
  
          <ul className="flexflex-col space-x-6 leading-8 text-left">
            <li>
              <a href="#" className="pl-6 text-black font-semibold">
                Confidentialité
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
                Conditions d'utilisation
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
                Mentions légales
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
                Parametrage des cookies
              </a>
=======
import logo from '../../public/_gatsby/_image/Images/logo.png';
import { Link } from 'gatsby';

const Footer = () => {
    return (
      <footer className='text-white p-10 mt-40' style={{backgroundColor:'#303E27'}}>
        <div  className="max-w-7xl h-52 mx-auto py-6 px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          <img className="h-36" src={logo} alt="Logo"/>
  
          <ul className="flex flex-col space-x-6 leading-8 text-left">
            <li>
              <Link to='/' className="pl-6 font-semibold">
                Confidentialité
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
                Conditions d'utilisation
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
                Mentions légales
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
                Parametrage des cookies
              </Link>
>>>>>>> jad
            </li>
          </ul>
  
          <ul className="flexflex-col space-x-6 leading-8 text-left">
            <li>
<<<<<<< HEAD
              <a href="#" className="text-black hover:text-gray-900 font-semibold pl-6">
                Contacter l'équipe
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
                +33.xx.xx.xx.xx
              </a>
            </li>
            <li>
              <a href="#" className="text-black hover:text-gray-900 font-semibold">
                example@mail.come
              </a>
            </li>
          </ul>
        </div> */}
=======
              <Link to='/' className="font-semibold pl-6">
                Contacter l'équipe
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
                +33.xx.xx.xx.xx
              </Link>
            </li>
            <li>
              <Link to='/' className="font-semibold">
                example@mail.come
              </Link>
            </li>
          </ul>
        </div>
>>>>>>> jad
      </footer>
    )
  }
  
<<<<<<< HEAD
  export default Footer
=======
  export default Footer;
>>>>>>> jad
