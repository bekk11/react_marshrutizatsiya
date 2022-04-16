import React  from "react";
import { Helmet } from "react-helmet";

function About() {
  return (
    <div>
      <Helmet>
        <meta name="keywords" content="about, About" />
        <meta
          name="description"
          content="Get lyrics of every music for free"
        />
      </Helmet>
        <h1>About page</h1>
    </div>
  );
}

export default About;
