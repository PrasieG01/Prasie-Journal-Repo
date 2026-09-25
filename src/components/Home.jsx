import React from "react";
import InteractiveDesk from "../components/InteractiveDesk";

const Home = ({ onNavigate }) => {
  return (
    <div className="home-container">
      <InteractiveDesk onNavigate={onNavigate} />
    </div>
  );
};

export default Home;
