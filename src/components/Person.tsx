import { FC } from "react";
import { PersonCard } from "./PersonCard";
import { PersonPropsI } from "../utils/types";


export const Person: FC<PersonPropsI> = ({
  setShowForm,
  setCounter,
}) => {
  return (
    <>
      <div className="header">
        <p>Kasia Knapowska</p>
        <button onClick={() => setShowForm(true)} className="btn btn_secondary">
          formularz rejestracyjny
        </button>
      </div>
      <PersonCard />
      <button
        className="btn btn_primary"
        onClick={() => setCounter((prevState: number) => prevState + 1)}
      >
        next profiles
      </button>
    </>
  );
};
