import React, { FC } from "react";
import { PersonCardProps } from "../utils/interfaces";
import "../App.css";

export const PersonCard: FC<PersonCardProps> = ({ name, age, eyes, img }) => {
  return (
    <div className="person_card">
      <img className="person_img" src={img} />
      <h1>{name}</h1>
      <p>age: {age}</p>
      <p>eye color: {eyes}</p>
    </div>
  );
};
