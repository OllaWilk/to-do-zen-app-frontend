import { useState, useRef, useCallback } from 'react';
import { TaskEntity } from 'types';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

interface FetchOption {
  method: HttpMethods;
  header: Record<string, string>;
  body?: TaskEntity | Omit<TaskEntity, 'id' | 'time'> | any;
}

interface FetchState<T> {
  data: T | null;
  loading: 'idle' | 'fetching' | 'fetched' | 'error';
  fetchData: (url: string, options?: FetchOption) => Promise<void>;
}

const getOption: FetchOption = {
  method: HttpMethods.GET,
  header: { 'Content-Type': 'application/json' },
};

const useFetch = <T,>(): FetchState<T> => {
  const dataCache = useRef<{ [key: string]: T }>({});
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<FetchState<T>['loading']>('idle');

  const fetchData = useCallback(
    async (url: string, initialOptions: FetchOption = getOption) => {
      if (!url || !url.trim()) return;

      setLoading('fetching');

      if (dataCache.current[url]) {
        const json = dataCache.current[url];
        setData(json);
        setLoading('fetched');
      } else {
        try {
          const response = await fetch(url, {
            method: initialOptions.method,
            headers: initialOptions.header,
            body:
              initialOptions.method === HttpMethods.GET
                ? null
                : JSON.stringify(initialOptions.body),
          });

          if (!response.ok) {
            throw new Error('Network response was not ok');
          }

          const json = await response.json();
          dataCache.current[url] = json;
          setData(json);
          setLoading('fetched');
        } catch (error) {
          console.error('Failded to save the task', error);
          setLoading('error');
          throw error;
        }
      }
    },
    []
  );

  return { data, loading, fetchData };
};

export { useFetch };
