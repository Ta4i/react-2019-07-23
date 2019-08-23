import {createContext} from 'react'
import {eng} from '../translations'

const {Provider, Consumer} = createContext({
  lang: eng,
})

export {Provider, Consumer}
