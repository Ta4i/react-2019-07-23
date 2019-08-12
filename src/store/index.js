import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from './middlewares/logger'
import review from './middlewares/review'
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools({})
const enhancer = composeEnhancer(applyMiddleware(logger, review))

const store = createStore(reducer, enhancer)

window.store = store

export default store
