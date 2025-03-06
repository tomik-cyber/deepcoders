import React, { useState } from "react";
import "./Navbar.css";
import LoginModal from "./LoginModal";

function Navbar() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <header className="navbar">
        <h1>DeepCoders</h1>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Freelancers</a></li>
            <li><a href="#">Projects</a></li>
            <li><button className="login-btn" onClick={() => setIsModalOpen(true)}>Login</button></li>
          </ul>
        </nav>
      </header>
      <LoginModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

export default Navbar;
