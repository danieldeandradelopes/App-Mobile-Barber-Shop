import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducers from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddlware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddlware];

const store = createStore(persistReducers(rootReducers), middlewares);

const persistor = persistStore(store);

sagaMiddlware.run(rootSaga);

export { store, persistor };
