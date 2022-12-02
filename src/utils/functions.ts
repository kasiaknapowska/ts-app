export async function request<TResponse>(
  url: string,
  config: RequestInit = {}
): Promise<TResponse> {
  return fetch(url, config)
    .then((response) => response.json())
    .then((data) => data as TResponse)
    .catch((error) => {
      const msg = `An error occurred: ${error.status}`;
      throw new Error(msg);
    })
}
export async function requestImg<TResponse>(
  url: string,
): Promise<TResponse> {
  return fetch(url)
    .then((data) => data as TResponse)
    .catch((error) => {
      const msg = `An error occurred: ${error.status}`;
      throw new Error(msg);
    })
}
