import { useState } from "react";
import { PeopleHookI, PersonI, PersonToPostI } from "../utils/interfaces";

function usePeople(): PeopleHookI {
  const [peopleToPost, setPeopleToPost] = useState<PersonToPostI[]>([]);
  const [person, setPerson] = useState<PersonI | null>(null);
  const [isLoading, setIsLoading] = useState(true);


  const fetchData = async (n: number) => {
    setIsLoading(true);
    const response = await fetch(`https://swapi.py4e.com/api/people/${n}/`);
    const data = await response.json();

    const responseImg = await fetch("https://picsum.photos/534/383");
    const imgUrl = responseImg.url;

    if (!response.ok || !responseImg.ok) {
      const msg = `An error occurred: ${response.status} || ${responseImg.status}`;
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
    setIsLoading(false);
    setPerson(person);
    setPeopleToPost((prevState) => {
      return [...prevState, personToPost];
    });
  };

  return { person, peopleToPost, isLoading, fetchData };
}

export default usePeople;
