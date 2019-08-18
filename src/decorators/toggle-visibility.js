// HOC - higher order component / decorator
import React, {Component} from 'react'

const toggleVisibility = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      isOpen: null,
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          toggleOpen={this.toggleOpen}
        />
      )
    }

    toggleOpen = () =>
      this.setState(prev => ({
        isOpen: !prev.isOpen,
      }))
  }

export {toggleVisibility}
