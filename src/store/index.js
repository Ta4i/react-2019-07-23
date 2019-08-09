import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleWare from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleWare()

const middlewares = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middlewares))

sagaMiddleware.run(rootSaga)

window.store = store

export default store
