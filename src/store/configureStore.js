import { createStore, applyMiddleware } from 'redux'
import rootReducer from './../reducer'
import logger from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './../saga';

const sagaMiddleware = createSagaMiddleware();

const middleware = [process.env.NODE_ENV !== 'production' && logger, sagaMiddleware].filter(Boolean)

export default () => {
    const store = createStore(rootReducer, applyMiddleware(...middleware))
    sagaMiddleware.run(rootSaga);
    return store
}
