import {createContext} from 'react'

const {Provider, Consumer} = createContext({
  userName: '',
})

export {Provider, Consumer}
