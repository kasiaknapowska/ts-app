import { FC, useEffect, useState, createContext } from "react";
import Form from "./components/Form";
import { Person } from "./components/Person";
import usePeople from "./hooks/usePeople";
import { PeopleContextI } from "./utils/types";
import "./App.css";


export const PeopleContext = createContext<PeopleContextI>({
  person: null,
  peopleToPost: [],
  isLoading: true,
});

const App: FC = () => {
  const { person, peopleToPost, isLoading, fetchData } = usePeople();
  const [counter, setCounter] = useState(1);
  const [showForm, setShowForm] = useState(false);

  useEffect(() => {
    fetchData(counter);
  }, [counter]);

  // useEffect(() => {
  //   console.log(person);
  //   console.log(peopleToPost);
  // }, [person, peopleToPost]);

  return (
    <PeopleContext.Provider value={{ person, peopleToPost, isLoading }}>
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
