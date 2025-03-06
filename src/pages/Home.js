import React from "react";
import "./Home.css";
import Freelancers from "../components/Freelancers";

function Home() {
  return (
    <main className="home">
      <h2>Welcome to DeepCoders</h2>
      <p>The best freelance platform for developers.</p>
      <button>Get Started</button>
      <Freelancers />
    </main>
  );
}

export default Home;
