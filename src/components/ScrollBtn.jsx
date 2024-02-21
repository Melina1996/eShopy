import React from "react";
import { useState } from "react";

export default function ScrollBtn() {
  //SCROLL BTN
  const [visible, setVisible] = useState(false);

  //Btn is displayed once I scrolled 100px
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 100) {
      setVisible(true);
    } else if (scrolled <= 100) {
      setVisible(false);
    }
  };

  //I scroll until top-0: on click of btn
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <div>
      <button
        className="fixed bottom-5 right-1 btn btn-circle border-none text-white bg-black hover:bg-[#214E1Fff]"
        onClick={scrollToTop}
        style={{ display: visible ? "inline" : "none" }}
      >
        TOP
      </button>
    </div>
  );
}
