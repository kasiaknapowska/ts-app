import { Dispatch, SetStateAction } from "react";

export interface FetchedPersonI {
  name: string;
  hair_color: string;
  eye_color: string;
  birth_year: string;
  vehicles: string[];
  created: string;
}
export interface FetchedImgI {
  url: string;
}
export interface PersonI {
  name: string;
  eye_color: string;
  birth_year: string;
  img: string;
}

export type PersonToPostI = Partial<FetchedPersonI>

export interface PeopleHookI {
  person: PersonI | null;
  peopleToPost: PersonToPostI[];
  isLoading: boolean;
  fetchData: (n: number) => void;
}

export interface FormDataI {
  login: string;
  password: string;
  email: string;
  phone: number | string;
  checkbox: boolean | string;
  star_wars_data: PersonToPostI[];
}
export interface PersonPropsI {
  setShowForm: Dispatch<SetStateAction<boolean>>;
  setCounter: Dispatch<SetStateAction<number>>;
}
export interface PeopleContextI {
  person: PersonI | null;
  peopleToPost: PersonToPostI[];
  isLoading: boolean;
}
