import { useState } from "react";
import { PeopleHookI, PersonI, PersonToPostI } from "../utils/interfaces";

function usePeople(): PeopleHookI {
  const [peopleToPost, setPeopleToPost] = useState<PersonToPostI[]>([]);
  const [person, setPerson] = useState<PersonI | null>(null);

  const fetchData = async (n: number) => {
    const response = await fetch(`https://swapi.py4e.com/api/people/${n}/`);
    const data = await response.json();

    const responseImg = await fetch("https://picsum.photos/534/383");
    const imgUrl: string = responseImg.url;

    if (!response.ok || !responseImg.ok) {
      const msg: string = `An error occurred: ${response.status} || ${responseImg.status}`;
      throw new Error(msg);
    }

    const person: PersonI = {
      name: data.name,
      eye_color: data.eye_color,
      birth_year: data.birth_year,
      img: imgUrl,
    };
    const personToPost: PersonToPostI = {
      name: data.name,
      vehicles: data.vehicles,
      created: data.created,
    };
    setPerson(person);
    setPeopleToPost((prevState) => {
      return [...prevState, personToPost];
    });
  };

  return { person, peopleToPost, fetchData };
}

export default usePeople;
