import React from "react";
import "./Hero.css";
import Header from "./Header/Header";
import "../App.css";
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import heart from "../assets/heart.png";
import calories from "../assets/calories.png";
import { motion } from "framer-motion";

const Hero = () => {
  const transition = { duration: 2 };
  return (
    <div className="hero">
      <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header></Header>
        <div className="the-best-ad">
          {/* <motion.div
            initial={{ left: "240px" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, type: "tween" }}
          ></motion.div> */}
          <motion.div
            initial={{ x: 250 }} // Start position at 250px
            whileInView={{ x: 1 }} // End position at 8px
            transition={{ duration: 2 }} // Transition duration of 1 second
          ></motion.div>
          <span>The Best Fitness Club In The Town </span>
        </div>
        <div className="hero-text">
          <div>
            <span className="strock-text">SHAPE </span>
            <span>YOUR </span>
          </div>
          <div>
            <span>Ideal Body</span>
          </div>
          <div>
            <span>
              In Here we will help you to shape and build your body live up your
              life to fullest
            </span>
          </div>
        </div>
        {/* Figures */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>expert coaches</span>
          </div>
          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>
          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>

        {/* button */}
        <div className="hero-button">
          <button className="btn">Get Start</button>
          <button className="btn">Learn More</button>
        </div>
      </div>

      {/* The Right Side */}
      <div className="right-h">
        <button className="btn">Join Now</button>

        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="heart-rate"
        >
          <img src={heart} alt="" />
          <span>Heart Rate</span>
          <span>116 BPM</span>
        </motion.div>

        <img className="hero-image" src={hero_image} alt="" />
        <motion.img
          initial={{ right: "11rem" }}
          whileInView={{ right: "20rem" }}
          transition={{ duration: "2" }}
          className="hero-image-back"
          src={hero_image_back}
          alt=""
        />

        <motion.div
          initial={{ right: "37rem" }}
          whileInView={{ right: "28rem" }}
          transition={{ duration: "2" }}
          className="calories"
        >
          <img src={calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 Kcal</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
