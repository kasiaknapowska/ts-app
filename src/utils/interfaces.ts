import {Dispatch, SetStateAction} from 'react'

export interface Person {
    name: string,
    eye_color: string,
    birth_year: string,
    img: string,
  }
  export interface PersonToPost {
    name: string,
    vehicles: string[],
    created: string,
  }
  export interface PeopleContext {
    person: Person | null,
    peopleToPost: PersonToPost[],
    fetchData: (n: number) => void,
  }
  export interface PersonCardProps {
    name: string,
    age: string,
    eyes: string,
    img: string
  }
  export interface FormData {
    login: string,
    password: string,
    email: string,
    phone: number | string,
    checkbox: boolean | string,
  }
  export interface PersonComponentProps{
    setShowForm: Dispatch<SetStateAction<boolean>>,
    setCounter: Dispatch<SetStateAction<number>>,
}
export interface PeopleContextData {
  person: Person | null,
  peopleToPost: PersonToPost[],
  fetchData: (n: number) => void,
}