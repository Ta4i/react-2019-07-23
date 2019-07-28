// HOC - higher order component / decorator
import React, { Component } from "react";

const accordion = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      itemId: null,
      isOpenBlock: false
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          openItem={this.state}
          toggleOpen={this.toggleOpen}
        />
      );
    }

    toggleOpen = (id, isOpen) =>
      this.setState({
        itemId: id,
        isOpenBlock: isOpen
      });
  };

export { accordion };
