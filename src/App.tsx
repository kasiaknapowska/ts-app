import React, { FC, useEffect, useState } from "react";
import "./App.css";
import { Person } from "./utils/interfaces";

const App: FC = () => {
  const [people, setPeople] = useState<Person[]>([]);
  const [person, setPerson] = useState<Person | null>(null);
  const [counter, setCounter] = useState<number>(1);
  // const fetchData = async (n: number) => {
  //   const response = await fetch(`https://swapi.dev/api/people/${n}/`);
  //   const data = await response.json();

  //   const person: Person = {
  //     name: data.name,
  //     eye_color: data.eye_color,
  //     birth_year: data.birth_year,
  //   };
  //   setPeople([person]);
  //   setPerson((prevState) => {
  //     return {
  //       ...prevState,
  //       ...person,
  //     };
  //   });

  //   if (!response.ok) {
  //     const msg = `An error occurred: ${response.status}`;
  //     throw new Error(msg);
  //   }
  // };
  // const fetchImg = async () => {
  //   const response = await fetch("https://picsum.photos/534/383");
  //   const url: string = response.url;

  //   setPerson((prevState) => {
  //     return {
  //       ...prevState,
  //       img: url,
  //     };
  //   });

  //   if (!response.ok) {
  //     const msg = `An error occurred: ${response.status}`;
  //     throw new Error(msg);
  //   }
  // };

  const fetchData = async (n: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${n}/`);
    const data = await response.json();

    const responseImg = await fetch("https://picsum.photos/534/383");
    const imgUrl: string = responseImg.url;

    if (!response.ok || !responseImg.ok) {
      const msg: string = `An error occurred: ${response.status} || ${responseImg.status}`;
      throw new Error(msg);
    }

    const person: Person = {
      name: data.name,
      eye_color: data.eye_color,
      birth_year: data.birth_year,
      img: imgUrl,
    };
    setPerson(person);
    setPeople((prevState) => {
      console.log(prevState);
      return [...prevState, person];
    });
  };

  useEffect(() => {
    fetchData(counter);
  }, [counter]);

  useEffect(() => {
    console.log(person);
    console.log(people);
  }, [person, people]);

  return (
    <div className="App">
      <section className="container">
        <p>Kasia Knapowska</p>
        <button>Formularz rejestracyjny</button>
        {person ? (
          <div>
            <img src={person.img} />
            <h1>{person.name}</h1>
            <p>age: {person.birth_year}</p>
            <p>eye color: {person.eye_color}</p>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
         <button onClick={() => setCounter(prevState => prevState + 1)}>Next profiles</button>
      </section>
     
    </div>
  );
};

export default App;
