import React from "react";

const Loader = () => {
  return (
    <div className="loader-container">
      {/* Spinner */}
      <div className="spinner"></div>

      {/* Text below the spinner */}
      <p className="loader-text text-sm lg:text-base">Green Acres Hospital</p>
    </div>
  );
};

export default Loader;
