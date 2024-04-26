import { useState, useEffect, useRef } from 'react';

export enum HttpMethods {
  GET = 'GET',
  POST = 'POST',
  DELETE = 'DELETE',
  PUT = 'PUT',
  PATCH = 'PATCH',
}

interface FetchState<T> {
  data: T | null;
  resStatus: 'idle' | 'fetching' | 'fetched' | 'error';
}

const useFetch = <T,>(url = ''): FetchState<T> => {
  const dataCache = useRef<{ [key: string]: T }>({});
  const [data, setData] = useState<T | null>(null);
  const [resStatus, setResStatus] =
    useState<FetchState<T>['resStatus']>('idle');

  useEffect(() => {
    if (!url || !url.trim()) return;

    (async () => {
      setResStatus('fetching');

      if (dataCache.current[url]) {
        const json = dataCache.current[url];
        setData(json);
        setResStatus('fetched');
      } else {
        try {
          const response = await fetch(url, {
            method: HttpMethods.GET,
            headers: {
              'Content-Type': 'application/json',
            },
          });
          const json = await response.json();
          dataCache.current[url] = json;
          setData(json);
          setResStatus('fetched');
        } catch (error) {
          console.error('Failded to save the task', error);
          setResStatus('error');
          throw error;
        }
      }
    })();
  }, [url]);

  return { data, resStatus };
};

export { useFetch };
