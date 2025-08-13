import { Dispatch } from "react";

export type Item = {
    title: string;
    description: string;
    image: string;
    url: string;
    category: string;
}

export enum Status {
    idle = 'idle',
    pending = 'pending',
    successful = 'successful',
    error = 'error',
    timedOut = 'timed-out' 
}

export enum ActionType {
  queryUpdated = 'queryUpdated',
  dataReceived = 'dataReceived',
  reset = 'reset',
  requestTimedOut='requestTimedOut',
  requestFailed = 'requestFailed',
}
export type Action= { type: ActionType.queryUpdated; payload: string }
  | { type: ActionType.dataReceived; payload: Item[] }
  | {type: ActionType.reset}
  | {type: ActionType.requestTimedOut}
  | {type: ActionType.requestFailed}
  
export interface State {
  query: string;
  results: Item[];
  status: Status;
  length: number;
  dispatch?: Dispatch<any>;
}