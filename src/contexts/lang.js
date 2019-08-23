import {createContext} from 'react'
import {translations} from '../translations'

const {Provider, Consumer} = createContext({
  lang: translations.eng,
})

export {Provider, Consumer}
