type AvailableMethods = 'post' | 'get';

interface IHttpClientOptions<T> {
  method: AvailableMethods;
  // TODO: smarter typings
  body: T;
}

// TODO: move this to .env
const API_URL = 'https://be-autocomplete.vercel.app';
// const API_URL = 'http://localhost:9000';

export function httpClient<B, R>(url: string, options?: IHttpClientOptions<B>): Promise<R> {
  return fetch(`${API_URL}${url}`, {
    method: options?.method || 'get',
    body: JSON.stringify(options?.body),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => {
    return response.json() as Promise<R>;
  });
}
