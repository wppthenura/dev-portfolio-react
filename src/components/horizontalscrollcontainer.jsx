// src/components/HorizontalScrollContainer.jsx
import React from "react";
import "./horizontalscrollcontainer.css";

const HorizontalScrollContainer = ({ children }) => {
  return (
    <div className="horizontal-scroll-container">
      {children}
    </div>
  );
};

export default HorizontalScrollContainer;
