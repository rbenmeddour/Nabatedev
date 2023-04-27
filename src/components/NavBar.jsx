import React from "react";
import logo from "../../public/_gatsby/_image/Images/logo.png";
import '../styles/nav.css';
import { graphql, useStaticQuery } from "gatsby";
import { Link } from "gatsby";

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
            <Link to='/'><img src={logo} alt="nabate logo" style={{ height: 80, width: 80 }} /></Link>
            <ul className="flex space-x-6 text-lg font-medium">
                {data.allWpPage.edges.reverse().map(({ node }) => (
                    node.title != "Bienvenue à Nabate" &&
                    <Link className="nav-title" key={node.title} to={`/${node.title.toLowerCase()}`}>
                    {node.title}
                    </Link>
                ))}
            </ul>
        </div>
        </nav>
    )
}
export default NavBar;