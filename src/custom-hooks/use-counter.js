import {useState} from 'react'

function useCounter(initialValue) {
  const [value, setAmount] = useState(initialValue)
  return [
    value,
    () => setAmount(value <= 0 ? 0 : value - 1),
    () => setAmount(value + 1),
  ]
}

export {useCounter}
