import React, { FC, useEffect, useState, createContext, Provider } from "react";
import "./App.css";
import Form from "./components/Form";
import { Person } from "./components/Person";
import usePeople from "./hooks/usePeople";
import { PeopleContextData, PersonToPost } from "./utils/interfaces";

// export const PeopleContext = createContext<PeopleContextData>({
//   person: null,
//   peopleToPost: [],
//   fetchData: () => null,
// });

export const PeopleContext = createContext<PersonToPost[]>([]);


const App: FC = () => {
  // const [peopleToPost, setPeopleToPost] = useState<PersonToPost[]>([]);
  // const [person, setPerson] = useState<Person | null>(null);
  const peopleContextValue = usePeople();
  const { person, peopleToPost, fetchData } = usePeople();
 
  const [counter, setCounter] = useState(1);
  const [showForm, setShowForm] = useState(false);

  // const fetchData = async (n: number) => {
  //   const response = await fetch(`https://swapi.py4e.com/api/people/${n}/`);
  //   const data = await response.json();

  //   const responseImg = await fetch("https://picsum.photos/534/383");
  //   const imgUrl: string = responseImg.url;

  //   if (!response.ok || !responseImg.ok) {
  //     const msg: string = `An error occurred: ${response.status} || ${responseImg.status}`;
  //     throw new Error(msg);
  //   }

  //   const person: Person = {
  //     name: data.name,
  //     eye_color: data.eye_color,
  //     birth_year: data.birth_year,
  //     img: imgUrl,
  //   };
  //   const personToPost: PersonToPost = {
  //     name: data.name,
  //     vehicles: data.vehicles,
  //     created: data.created,
  //   };
  //   setPerson(person);
  //   setPeopleToPost((prevState) => {
  //     console.log(prevState);
  //     return [...prevState, personToPost];
  //   });
  // };

  useEffect(() => {
    fetchData(counter);
  }, [counter]);

  useEffect(() => {
    console.log(person);
    console.log(peopleToPost);
    console.log(peopleContextValue.person)
  }, [person, peopleToPost]);

  return (
    <PeopleContext.Provider value={peopleToPost}>
      <section className="container">
        {!showForm ? (
          <Person setShowForm={setShowForm} setCounter={setCounter} />
        ) : (
          <Form />
        )}
      </section>
    </PeopleContext.Provider>
  );
};

export default App;
