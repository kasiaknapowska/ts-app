import { useState } from "react";
import { request, requestImg } from "../utils/functions";
import {
  PeopleHookI,
  PersonI,
  PersonToPostI,
  FetchedPersonI,
  FetchedImgI,
} from "../utils/types";

function usePeople(): PeopleHookI {
  const [peopleToPost, setPeopleToPost] = useState<PersonToPostI[]>([]);
  const [person, setPerson] = useState<PersonI | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = async (n: number) => {
    setIsLoading(true);

    const data = await request<FetchedPersonI>(
      `https://swapi.py4e.com/api/people/${n}/`
    );
    const dataImg = await requestImg<FetchedImgI>(
      `https://picsum.photos/534/383`
    );

    const person: PersonI = {
      name: data.name,
      eye_color: data.eye_color,
      birth_year: data.birth_year,
      img: dataImg.url,
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
