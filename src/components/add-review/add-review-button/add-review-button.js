import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import {showReviewForm} from '../../../store/ac'

class AddReviewButton extends React.PureComponent {
  render() {
    const {onClick, isDisabled} = this.props

    return (
      <div className="add-review-button">
        <Button type="primary" disabled={isDisabled} onClick={onClick}>
          Add Restaurant Review
        </Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  isDisabled: state.reviewForm.isVisible,
})

const mapDispatchToProps = dispatch => ({
  onClick: () => dispatch(showReviewForm()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewButton)
