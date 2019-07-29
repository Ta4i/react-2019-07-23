// HOC - higher order component / decorator
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      openItemId: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    toggleOpen = id =>
      this.setState(state => {
        if (state.openItemId === id) {
          return { openItemId: null };
        }
        return {
          openItemId: id
        };
      });
  };

export { accordion };
