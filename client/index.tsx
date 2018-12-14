import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Store, createStore } from 'redux';
import Hello from './components/Hello';
import reducers from './reducers';

let store: Store;
if (process.env.NODE_ENV !== 'development') {
  store = createStore(reducers);
} else {
  store = createStore(
    reducers,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__(),
  );
}
ReactDOM.render(
  <Provider store={store}>
    <Hello />
  </Provider>,
  document.getElementById('app'),
);
