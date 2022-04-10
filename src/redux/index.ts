import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import albumsReducer from './albums/reducer';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '../sagas';

const rootReducer = combineReducers({
  albums: albumsReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;
