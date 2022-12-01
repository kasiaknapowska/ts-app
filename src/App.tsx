import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { Person } from "./utils/interfaces";

const App: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person | null>(null);

  const fetchData = async (n: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${n}/`);
    const data = await response.json();

    const person: Person = {
      name: data.name,
      eye_color: data.eye_color,
      birth_year: data.birth_year,
    };
    setPeople([person]);
    setPerson((prevState) => {
      return {
        ...prevState,
        ...person,
      };
    });

    if (!response.ok) {
      const msg = `An error occurred: ${response.status}`;
      throw new Error(msg);
    }
  };
  const fetchImg = async () => {
    const response = await fetch("https://picsum.photos/534/383");
    const url: string = response.url;

    setPerson((prevState) => {
      return {
        ...prevState,
        img: url,
      };
    });

    if (!response.ok) {
      const msg = `An error occurred: ${response.status}`;
      throw new Error(msg);
    }
  };
  useEffect(() => {
    fetchData(1);
    fetchImg();
  }, []);

  useEffect(() => {
    console.log(person);
  }, [person]);

  return (
    <div className="App">
      <section>
        {person?.img && person?.name ? (
          <>
            <img src={person.img} />
            <h1>{person.name}</h1>
            <p>age: {person.birth_year}</p>
            <p>eye color: {person.eye_color}</p>
          </>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
      <button>Next profiles</button>
    </div>
  );
};

export default App;
