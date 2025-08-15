'use client';
import {createContext, useContext, useReducer, ReactNode, Dispatch} from 'react';
import { State, Status, Item, Action } from '../types';

const initialState: State = {
  query: '',
  results: [],
  status: Status.idle,
  length: 0,
};


const DataContext= createContext<(State & { dispatch: Dispatch<Action> }) | undefined>(undefined);

function reducer(state: State, action: Action): State{
  switch (action.type) {
    case 'queryUpdated':
      return {
        ...state,
        query: action.payload,
        status: Status.pending,
      };
    case 'dataReceived':
      return {
        ...state,
        results: action.payload,
        status: Status.successful,
        length: action.payload.length,
      };
    case 'requestTimedOut':
      return {
        ...state,
        status: Status.timedOut,
        length: 0,
        results: [],
      };
    case 'requestFailed':
      return{
        ...state,
        status: Status.error,
        length: 0,
        results: [],
      }
    case 'reset':
      return{
        ...initialState
      }

    default:
      throw new Error('Unknown action type');
  }
}

function DataProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
}

function useData() {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
}

export { DataProvider, useData };
