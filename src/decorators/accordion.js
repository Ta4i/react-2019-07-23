// HOC - higher order component / decorator
import React, {Component} from 'react'

const accordion = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      openItemId: null,
    }

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpen={this.toggleOpen}
        />
      )
    }

    toggleOpen = id =>
      this.setState({
        openItemId: id === this.state.openItemId ? null : id,
      })
  }

export {accordion}
