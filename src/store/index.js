import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import logger from './middlewares/logger'
import idGenerate from './middlewares/id-generate'
import {composeWithDevTools} from 'redux-devtools-extension'

const composeEnhancer = composeWithDevTools({})
const enhancer = composeEnhancer(applyMiddleware(idGenerate, logger))

const store = createStore(reducer, enhancer)

window.store = store

export default store
