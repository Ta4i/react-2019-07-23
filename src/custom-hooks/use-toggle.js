import {useState} from 'react'

export function useToggle() {
  const [isOpen, setIsOpen] = useState(false)

  return [isOpen, () => setIsOpen(!isOpen)]
}
