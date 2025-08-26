'use client';

import { useEffect, useRef } from 'react';
import { useData } from '../_Context/context';
import ResultItemComponent from './ResultItem';
import { ActionType, Item, Status } from '../types';
import Spinner from './Spinner';

const TIMEOUT = 7000;

export default function ResultsList() {
  const { query, results, status, dispatch, length } = useData();
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
        console.log(query,'searching')
        const res = await fetch(
          `https://frontend-test-api.digitalcreative.cn/?no-throttling=true&search=${query}`,
          { signal: controllerRef.current.signal }
        );
        const data: Item[] = await res.json();
        dispatch({ type: ActionType.dataReceived, payload: data });
      } 
      catch (err: any) {
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
    }, 2000);

    return () => {
      clearTimeout(timer);
      controllerRef.current?.abort();
    };
  }, [query, dispatch]);
  if(!length) return <></>
  return (<>
    <div
        className={`flex flex-col max-h-[300px] gap-[10px] overflow-scroll transition-opacity duration-300 ${
          status === Status.pending ? 'opacity-40' : 'opacity-100'
        }`}
      >
        {results.map((el: Item, _i: number) => (
          <ResultItemComponent key={_i} item={el} />
        ))}
      </div>

      {status === Status.pending && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Spinner />
        </div>
      )}
    </>
  );
}
