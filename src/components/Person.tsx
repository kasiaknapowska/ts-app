import React, {FC} from 'react'
import { PersonComponentProps } from '../utils/interfaces'
import { PersonCard } from './PersonCard'


export const Person: FC<PersonComponentProps> = ({ setShowForm, setCounter }) => {
  return (
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
  {/* {person ? (
    <PersonCard
      name={person.name}
      age={person.birth_year}
      eyes={person.eye_color}
      img={person.img}
    />
  ) : (
    <h1>Loading...</h1>
  )} */}
  <PersonCard/>
  <button
    className="btn btn_primary"
    onClick={() => setCounter((prevState: number) => prevState + 1)}
  >
    next profiles
  </button>
</>
  )
}