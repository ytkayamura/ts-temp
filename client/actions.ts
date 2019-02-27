import { Action } from 'redux';

 // Action Types
export enum ActionTypes {
  HELLO = 'HELLO',
  HELLO_WORLD = 'HELLO_WORLD',
  GOODBYE = 'GOODBYE',
}

 // Action Interfaces
interface HelloAction extends Action {
  type: ActionTypes.HELLO;
  payload: {
    name: string;
  };
}
interface HelloWorldAction extends Action {
  type: ActionTypes.HELLO_WORLD;
  payload: {
    greeting: string;
  };
}
interface GoodbyeAction extends Action {
  type: ActionTypes.GOODBYE;
}
export type Act = HelloAction | HelloWorldAction | GoodbyeAction;

// Action Creators
export const ActionCreators = {
  hello: (name: string): HelloAction => ({
    type: ActionTypes.HELLO,
    payload: { name },
  }),
  helloWorld: (greeting: string): HelloWorldAction => ({
    type: ActionTypes.HELLO_WORLD,
    payload: { greeting },
  }),
  goodbye: (): GoodbyeAction => ({
    type: ActionTypes.GOODBYE,
  }),
};
