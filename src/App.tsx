import React, { FC, useEffect, useState } from "react";
import "./App.css";
import Form from "./components/Form";
import { PersonCard } from "./components/PersonCard";
import { Person, PersonToPost } from "./utils/interfaces";

const App: FC = () => {
  const [peopleToPost, setPeopleToPost] = useState<PersonToPost[]>([]);
  const [person, setPerson] = useState<Person | null>(null);
  const [counter, setCounter] = useState<number>(1);
  const [showForm, setShowForm] = useState<boolean>(false);


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
    const personToPost: PersonToPost = {
      name: data.name,
      vehicles: data.vehicles,
      created: data.created,
    };
    setPerson(person);
    setPeopleToPost((prevState) => {
      console.log(prevState);
      return [...prevState, personToPost];
    });
  };

  useEffect(() => {
    fetchData(counter);
  }, [counter]);

  useEffect(() => {
    console.log(person);
    console.log(peopleToPost);
  }, [person, peopleToPost]);

  return (
    <>
      <section className="container">
        {!showForm ? (
          <>
            <div className="header">
              <p>Kasia Knapowska</p>
              <button
                onClick={() => setShowForm(true)}
                className="btn btn_secondary"
              >
                formularz rejestracyjny
              </button>
            </div>
            {person ? (
              <PersonCard
                name={person.name}
                age={person.birth_year}
                eyes={person.eye_color}
                img={person.img}
              />
            ) : (
              <h1>Loading...</h1>
            )}
            <button
              className="btn btn_primary"
              onClick={() => setCounter((prevState) => prevState + 1)}
            >
              next profiles
            </button>
          </>
        ) : (
          <Form/>
        )}
      </section>
    </>
  );
};

export default App;
