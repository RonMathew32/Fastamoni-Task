import { createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { rootReducer } from './reducers/root.reducers';
import { rootSaga } from './middlewares/root.saga';
import createSagaMiddleware from 'redux-saga';

const persistConfig = {
  key: 'finiksroot',
  storage: AsyncStorage,
};

/* ------------- Redux Configuration ------------- */
const middleware = [];
const enhancers = [];

/* ------------- Saga Middleware ------------- */
const sagaMiddleware = createSagaMiddleware();
middleware.push(sagaMiddleware);

/* ------------- Assemble Middleware ------------- */
enhancers.push(applyMiddleware(...middleware));

const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = createStore(persistedReducer, compose(...enhancers));
export const persistor = persistStore(store);

// kick off root saga
sagaMiddleware.run(rootSaga);
