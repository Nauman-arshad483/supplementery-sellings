import React from "react";
import { useNavigate } from "react-router-dom";

const NavigateButton = ({ left, to }) => {
  const navigate = useNavigate();
  if (left) {
    return (
      <button
        onClick={() => navigate(to)}
        className="absolute md:-left-10 -left-5 md:top-[50vh] top-[50vh]"
      >
        <img className="md:w-8 w-6" src="/Icons/arrow_l.png" alt="" />{" "}
      </button>
    );
  } else {
    return (
      <button
        onClick={() => navigate(to)}
        className="absolute md:-right-8 -right-5 md:top-[50vh] top-[50vh]"
      >
        <img className="md:w-8 w-6" src="/Icons/arrow_r.png" alt="" />{" "}
      </button>
    );
  }
};

export default NavigateButton;
