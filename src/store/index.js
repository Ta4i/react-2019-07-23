import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from './middlewares/logger'
import addReview from './middlewares/add-review'
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools({})
const enhancer = composeEnhancer(applyMiddleware(logger, addReview))

const store = createStore(reducer, enhancer)

window.store = store

export default store
