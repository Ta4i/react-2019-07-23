import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
// import logger from './middlewares/logger'
import generateId from './middlewares/generate-id'
import provideUserId from './middlewares/provide-user-id'
import {composeWithDevTools} from 'redux-devtools-extension'
import api from './middlewares/api'
import order from './middlewares/make-order'
import thunk from 'redux-thunk'

const composeEnhancer = composeWithDevTools({})
const enhancer = composeEnhancer(
  applyMiddleware(order, thunk, api, generateId, provideUserId)
)

const store = createStore(reducer, enhancer)

window.store = store

export default store
