import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from './middlewares/logger'
import {composeWithDevTools} from 'redux-devtools-extension'
import idGenerator from './middlewares/idGenerator'

const composeEnhancer = composeWithDevTools({})
const enhancer = composeEnhancer(
  /*applyMiddleware(logger),*/
  applyMiddleware(idGenerator)
)

const store = createStore(reducer, enhancer)

window.store = store

export default store
