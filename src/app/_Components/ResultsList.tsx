'use client';

import { useEffect, useRef } from 'react';
import { useData } from '../_Context/context';
import ResultItemComponent from './ResultItem';
import { ActionType, Item } from '../types';

const TIMEOUT =6000;

export default function ResultsList() {
  const { query, results, dispatch, length } = useData();
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (query === '') {
      dispatch({ type: 'reset' });
      return;
    }

    const fetchData = async () => {
      if (controllerRef.current) controllerRef.current.abort();
      controllerRef.current = new AbortController();

      const timeoutId = setTimeout(() => controllerRef.current?.abort(), TIMEOUT);

      try {
        const res = await fetch(
          `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${query}`,
          { signal: controllerRef.current.signal }
        );
        const data: Item[] = await res.json();
        dispatch({ type: ActionType.dataReceived, payload: data });
      } catch (err: any) {
        console.log(err,'hi')
        if (err?.name === 'AbortError') {
          dispatch({ type: ActionType.requestTimedOut });
        } else {
          dispatch({ type: ActionType.requestFailed });
        }
      } finally {
        clearTimeout(timeoutId);
      }
    };

    const timer = setTimeout(() => {
      fetchData();
    }, 3000);

    return () => {
      clearTimeout(timer);
      controllerRef.current?.abort();
    };
  }, [query, dispatch]);

  if (!length) return <></>;

  return (
    <div className="flex flex-col gap-[10px] overflow-scroll">
      {results.map((el: Item, _i: number) => (
        <ResultItemComponent key={_i} item={el} />
      ))}
    </div>
  );
}
