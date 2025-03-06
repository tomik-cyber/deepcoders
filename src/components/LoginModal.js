import React, { useState } from "react";
import "./LoginModal.css";

function LoginModal({ isOpen, onClose }) {
  const [isSignUp, setIsSignUp] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className={`modal-content ${isSignUp ? "slide-left" : "slide-right"}`} onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>✖</button>

        {isSignUp ? (
          <>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Enter your name" />
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Create a password" />
            <button className="login-btn">Create Account</button>
            <p>Already have an account? <span className="toggle-link" onClick={() => setIsSignUp(false)}>Sign In</span></p>
          </>
        ) : (
          <>
            <h2>Login</h2>
            <input type="email" placeholder="Enter your email" />
            <input type="password" placeholder="Enter your password" />
            <button className="login-btn">Sign In</button>
            <p>Don't have an account? <span className="toggle-link" onClick={() => setIsSignUp(true)}>Sign Up</span></p>
          </>
        )}
      </div>
    </div>
  );
}

export default LoginModal;
