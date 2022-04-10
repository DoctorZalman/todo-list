import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const instance: AxiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com/',
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
  },
});

const get = <R>(url: string, config?: AxiosRequestConfig): Promise<R> =>
  instance.get(url, config).then((response) => response as unknown as R);

export { get };
