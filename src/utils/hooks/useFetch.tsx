import { useState, useRef, useCallback } from 'react';
import { HttpMethod } from '../types/JsonCommunicationType';
import { EventEntity } from 'types';

interface FetchOption {
  method: HttpMethod;
  headers: Record<string, string>;
  body?: EventEntity | Omit<EventEntity, 'id' | 'time'> | unknown;
}

interface FetchState<T> {
  data: T | null;
  loading: 'idle' | 'fetching' | 'fetched' | 'error';
  fetchData: (
    url: string,
    options?: FetchOption,
    onSuccess?: (data: T) => void
  ) => Promise<void>;
}

const getOption: FetchOption = {
  method: HttpMethod.GET,
  headers: { 'Content-Type': 'application/json' },
};

const useFetch = <T,>(): FetchState<T> => {
  const dataCache = useRef<{ [key: string]: T }>({});
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<FetchState<T>['loading']>('idle');

  const fetchData = useCallback(
    async (
      url: string,
      initialOptions: FetchOption = getOption,
      onSuccess?: (data: T) => void
    ) => {
      setLoading('fetching');
      if (initialOptions.method === HttpMethod.GET && dataCache.current[url]) {
        const json = dataCache.current[url];
        setData(json);
        setLoading('fetched');
      } else {
        try {
          const response = await fetch(url, {
            method: initialOptions.method,
            headers: initialOptions.headers,
            body:
              initialOptions.method === HttpMethod.GET
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
          onSuccess?.(json);
        } catch (error) {
          console.error('Failed to save the task', error);
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
