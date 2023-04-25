import React from "react";
import logo from "../../public/_gatsby/_image/Images/logo.png";
import '../styles/nav.css';
import { graphql, useStaticQuery } from "gatsby";


function NavBar(){
    const data = useStaticQuery(graphql`
        query {
            allWpPage {
                edges {
                node {
                    title
                }
                }
            }
        }
    `)
    return(
        <nav className="absolute w-full">
        <div className="flex justify-between items-center py-4 px-6 text-white">
            <img src={logo} alt="nabate logo" className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32" />
            <ul className="flex space-x-6 text-lg font-medium">
                {data.allWpPage.edges.reverse().map(({ node }) => (
                    <li className="nav-title" key={node.title}>
                    {node.title}
                    </li>
                ))}
            </ul>
        </div>
        </nav>
    )
}
export default NavBar;
