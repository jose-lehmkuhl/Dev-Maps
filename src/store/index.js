import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';

import reducers from './ducks';
import sagas from './sagas';

const middlewares = [];

const sagaMiddleWare = createSagaMiddleware();

middlewares.push(sagaMiddleWare);

const store = createStore(reducers, compose(applyMiddleware(sagaMiddleWare)));

sagaMiddleWare.run(sagas);

export default store;
