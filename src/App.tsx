import React, {FC, useEffect, useState} from 'react';
import './App.css';
import { Person } from './utils/interfaces';

const App: FC = () => {
const [people, setPeople] = useState<Person[]>([])


  const fetchData = async (n: number) => {
    const response = await fetch(`https://swapi.dev/api/people/${n}/`)
    const data = await response.json()

    const person = {
    name: data.name,
    eye_color: data.eye_color,
    birth_year: data.birth_year,
    url: data.url,
    }
    console.log(person)
    setPeople([person])

    if(!response.ok) {
      const msg = `An error occurred: ${response.status}`
    }
  }

  useEffect(() => {
   fetchData(1)
  }, [])
  
  useEffect(() => {
    console.log(people)
   }, [people])

  return (
    <div className="App">
     {people.map(person => (
      <section key={person.url}>
        <h1>{person.name}</h1>
        <p>age: {person.birth_year}</p>
        <p>eye color: {person.eye_color}</p>
      </section>
     ))}
    </div>
  );
}

export default App;
