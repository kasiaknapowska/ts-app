export interface Person {
    name: string,
    eye_color: string,
    birth_year: string,
    img: string
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