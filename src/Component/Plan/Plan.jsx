import React from "react";
import "./Plan.css";
import "../../App.css";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";

const Plan = () => {
  return (
    <div className="plan-container">
      <div className="blur plan-blur-1"></div>
      <div className="blur plan-blur-2"></div>
      <div className="programs">
        <span className="strock-text">ready to start</span>
        <span>your journey</span>
        <span className="strock-text">now with us</span>
      </div>
      <div className="plans">
        {plansData.map((plan, i) => (
          <div className="plan">
            {plan.icon}
            <span className="plan-name">{plan.name} </span>
            <span className="price">$ {plan.price}</span>

            <div className="features">
              {plan.features.map((feature, i) => (
                <div className="feature">
                  <img src={whiteTick} alt="" />
                  <span key={i}> {feature}</span>
                </div>
              ))}
            </div>
            <div>
              <span className="benefits">See More benefits</span>
            </div>
            <button className="btn">Join Now</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plan;
