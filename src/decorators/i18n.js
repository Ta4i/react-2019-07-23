import React from 'react'
import {Consumer} from '../contexts/i18n'
import dictionaries from '../dictionaries'

const i18n = OriginalComponent => props => {
  return (
    <Consumer>
      {lang => (
        <OriginalComponent {...props} t={createTranslate(dictionaries[lang])} />
      )}
    </Consumer>
  )
}

export const createTranslate = dictionary => text => dictionary[text] || text

export default i18n
