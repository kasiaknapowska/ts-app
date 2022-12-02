// import { ResponseI } from "./interfaces";

export async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse);
}

// export const fetchData = (n: number) =>
//   request<ResponseI>(`https://swapi.dev/api/people/${n}/`).then((data) => {
//     console.log(data);
//   });