import { useState, useEffect, useRef } from 'react';
import { JsonCommunicationType } from '../types/JsonCommunicationType';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

const initialOptions = {
  method: HttpMethods.GET,
  headers: {
    'Content-Type': 'application/json',
  },
  body: {},
};

export const useFetch = (url = '', value = initialOptions) => {
  const cache = useRef<any>({});
  const [address, setAddress] = useState<string>(url);
  const [status, setStatus] = useState<string>('idle');
  const [form, setForm] = useState(value);
  const [data, setData] = useState<JsonCommunicationType>();

  const fetchData = (url: string, value: typeof initialOptions) => {
    setAddress(url);
    setForm(value);
  };

  useEffect(() => {
    if (!address || !address.trim()) return;

    const fetchDataGet = async () => {
      setStatus('fetching');

      if (cache.current[address]) {
        const data = cache.current[address];
        setData(data);
        setStatus('fetched');
      } else {
        const res = await fetch(address, {
          method: form.method,
          credentials: 'include',
          headers: form.headers,
          body:
            form.method === HttpMethods.GET ? null : JSON.stringify(form.body),
        });

        const data = await res.json();
        cache.current[address] = data;
        setData(data);
        setStatus('fetched');
      }
    };
    fetchDataGet();
  }, [address, form.method]);

  return [data, status, fetchData, cache] as const;
};
