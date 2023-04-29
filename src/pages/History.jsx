import React from "react";
import { graphql } from "gatsby";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

export const query = graphql`
  query {
    wpPage(id: { eq: "cG9zdDo2" }) {
      title
      content
    }
  }
`;

const History = ({ data }) => {
  return (
    <>
      <NavBar />
      <Footer />
    </>
  );
};

export default History;
