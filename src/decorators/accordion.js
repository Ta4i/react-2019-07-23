// HOC - higher order component / decorator
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      openItemId: null
    };

    toggleOpen = id =>
      this.setState({
        openItemId: id !== this.state.openItemId ? id : null
      });

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItemId={this.state.openItemId}
          toggleOpen={this.toggleOpen}
        />
      );
    }
  };

export { accordion };
