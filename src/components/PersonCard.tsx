import { FC, useContext } from "react";
import { PeopleContext } from "../App";
import { PeopleContextI } from "../utils/interfaces";
import "../App.css";
import personIcon from "../assets/person-icon.svg";
import checkIcon from "../assets/check-icon.svg";


export const PersonCard: FC = () => {
  const { person } = useContext<PeopleContextI>(PeopleContext);
 
  return (
    <>
      {person ? (
        <div className="person_card">
          <img className="person_img" src={person.img} />
          <div className="person_header">
            <h1>{person.name}</h1>
            <div>
              <img src={personIcon} />
              <img src={checkIcon} />
            </div>
          </div>
          <div className="person_data">
            <p>age: {person.birth_year}</p>
            <p>eye color: {person.eye_color}</p>
          </div>
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
};
