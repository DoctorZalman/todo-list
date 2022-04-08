import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  app: () => ({}),
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
