// export const fetchData = (n: number, successCallback: () => {}) => {
//     fetch(
//         `https://swapi.dev/api/people/${n}/`
//       )
//         .then((r) => r.json())
//         .then((data) => {
//           if (data && typeof successCallback === "function") {
//             successCallback(data);
//           }
//         })
//         .catch((err) => console.log(err));
// }

import { Person } from "./types";

export async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

export const fetchData = (n: number) =>
  request<Person>(`https://swapi.dev/api/people/${n}/`).then((data) => {
    console.log(data);
  });