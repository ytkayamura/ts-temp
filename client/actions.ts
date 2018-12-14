import { Action } from 'redux';

 // Action Types
export enum ActionTypes {
  HELLO = 'HELLO',
  GOODBYE = 'GOODBYE',
}

 // Action Interfaces
interface HelloAction extends Action {
  type: ActionTypes.HELLO;
  payload: {
    name: string;
  };
}
interface GoodbyeAction extends Action {
  type: ActionTypes.GOODBYE;
}
export type Act= HelloAction | GoodbyeAction;

// Action Creators
export const ActionCreators = {
  hello: (name: string): HelloAction => ({
    type: ActionTypes.HELLO,
    payload: { name },
  }),
  goodbye: (): GoodbyeAction => ({
    type: ActionTypes.GOODBYE,
  }),
};
