import React from "react"
import { Helmet } from "react-helmet"

function Home() {
  return (
    <div>
      <Helmet>
        <meta name="keywords" content="bekki, bekzod" />
        <meta
          name="description"
          content="Get lyrics of every music for free"
        />
      </Helmet>
      <h1>Home</h1>
    </div>
  );
}

export default Home;
