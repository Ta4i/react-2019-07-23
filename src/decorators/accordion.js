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

    toggleOpen = (id, isOpen) =>
      this.setState({
        openItemId: isOpen ? null : id
      });
  };

export { accordion };
