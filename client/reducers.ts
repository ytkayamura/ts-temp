import { GlobalState, initialState } from './state';
import { Act, ActionTypes } from './actions';

export default function reducers(state: GlobalState = initialState, action: Act): GlobalState {
  switch (action.type) {
  case ActionTypes.HELLO:
    {
      const { name } = action.payload;
      return {
        ...state,
        greeting: `Hello ${name}!`,
      };
    }
  case ActionTypes.HELLO_WORLD:
    {
      const { greeting } = action.payload;
      return {
        ...state,
        greeting,
      };
    }
  case ActionTypes.GOODBYE:
    if (state.greeting.startsWith('Goodbye')) {
      return {
        ...state,
        greeting: `${state.greeting}!`,
      };
    }
    return {
      ...state,
      greeting: 'Goodbye!',
    };
  default:
    return state;
  }
}
