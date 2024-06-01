import React, { useState } from "react";
import "./Trestrimonial.css";
import "../../App.css";
import { testimonialsData } from "../../data/testimonialsData.js";
import leftarrow from "../../assets/leftArrow.png";
import rightarrow from "../../assets/rightArrow.png";
import { motion } from "framer-motion";

const Trestrimonial = () => {
  const [selected, setselected] = useState(0);
  const length = testimonialsData.length;

  return (
    <div className="testimonials">
      <div className="left-t">
        <span>Testimonials</span>
        <span className="strock-text">what they</span>
        <span>say about us</span>
        <motion.span
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
          exit={{ opacity: 0, x: -100 }}
          className="testi-review"
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="testi-name">
            {testimonialsData[selected].name}
            {" - "}
          </span>
          {testimonialsData[selected].status}
        </span>
      </div>

      <div className="right-t">
        <motion.div
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          whileInView={{ opacity: 1, x: 0 }}
        ></motion.div>

        <motion.div
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2 }}
        ></motion.div>

        <motion.img
          key={selected}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 2 }}
          src={testimonialsData[selected].image}
          alt=""
        />

        <div className="arrow">
          <img
            onClick={() => {
              selected === 0
                ? setselected(length - 1)
                : setselected(selected - 1);
            }}
            src={leftarrow}
            alt=""
          />
          <img
            onClick={() => {
              selected === length - 1
                ? setselected(0)
                : setselected(selected + 1);
            }}
            src={rightarrow}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Trestrimonial;
