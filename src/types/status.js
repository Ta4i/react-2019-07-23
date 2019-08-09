const IDLE = 'IDLE'
const SENDING = 'SENDING'
const ERROR = 'ERROR'
const DONE = 'DONE'

const Status = Object.freeze({
  IDLE: Symbol(IDLE),
  DONE: Symbol(DONE),
  ERROR: Symbol(ERROR),
  SENDING: Symbol(SENDING),
})

export default Status
