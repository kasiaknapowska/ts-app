import React, { FC } from "react";
import { PersonCardProps } from "../utils/interfaces";
import "../App.css";
import personIcon from "../assets/person-icon.svg";
import checkIcon from "../assets/check-icon.svg";

export const PersonCard: FC<PersonCardProps> = ({ name, age, eyes, img }) => {
  return (
    <div className="person_card">
      <img className="person_img" src={img} />
      <div className="person_header">
        <h1>{name}</h1>
        <div>
          <img src={personIcon} />
          <img src={checkIcon} />
        </div>
      </div>
      <div className="person_data">
        <p>age: {age}</p>
        <p>eye color: {eyes}</p>
      </div>
    </div>
  );
};
