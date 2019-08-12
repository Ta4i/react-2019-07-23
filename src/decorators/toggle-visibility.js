// HOC - higher order component / decorator
import React, { Component } from "react";

const toggleVisibility = OriginalComponent =>
  class WrappedComponent extends Component {
    state = {
      isOpen: null,
      isFormOpen: null
    };

    render() {
      return (
        <OriginalComponent
          {...this.props}
          isOpen={this.state.isOpen}
          isFormOpen={this.state.isFormOpen}
          toggleOpen={this.toggleOpen}
          formOpen={this.formOpen}
        />
      );
    }

    toggleOpen = () =>
      this.setState(prev => ({
        isOpen: !prev.isOpen
      }));

    formOpen = () => this.setState(prev => ({ isFormOpen: !prev.isFormOpen }));
  };

export { toggleVisibility };
