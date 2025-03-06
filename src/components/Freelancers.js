import React from "react";
import "./Freelancers.css";

const freelancers = [
  { id: 1, name: "Alice Johnson", skill: "Full Stack Developer", img: "https://randomuser.me/api/portraits/women/45.jpg" },
  { id: 2, name: "John Doe", skill: "Frontend Developer", img: "https://randomuser.me/api/portraits/men/32.jpg" },
  { id: 3, name: "Emily Smith", skill: "UI/UX Designer", img: "https://randomuser.me/api/portraits/women/29.jpg" }
];

function Freelancers() {
  return (
    <section className="freelancers">
      <h2>Top Freelancers</h2>
      <div className="freelancer-list">
        {freelancers.map((freelancer) => (
          <div key={freelancer.id} className="freelancer-card">
            <img src={freelancer.img} alt={freelancer.name} />
            <h3>{freelancer.name}</h3>
            <p>{freelancer.skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Freelancers;
