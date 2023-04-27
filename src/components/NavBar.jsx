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
        <nav className="absolute w-full" style={{zIndex:2,}}>
        <div className="flex justify-between items-center py-4 px-6 text-white">
            <img src={logo} alt="nabate logo" style={{ height: 80, width: 80 }} />
            <ul className="flex space-x-6 text-lg font-medium">
                {data.allWpPage.edges.reverse().map(({ node }) => (
                    node.title != "Bienvenue à Nabate" &&
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