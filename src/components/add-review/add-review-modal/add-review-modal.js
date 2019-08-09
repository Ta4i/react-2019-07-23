import React from 'react'
import {Modal, Button} from 'antd'
import {connect} from 'react-redux'
import {hideReviewForm} from '../../../store/ac'
import AddReviewButton from '../add-review-button'
import AddReviewForm from '../add-review-form'

class AddReviewModal extends React.PureComponent {
  render() {
    const {isVisible, onClose} = this.props

    return (
      <>
        <AddReviewButton />
        <Modal
          visible={isVisible}
          title={`Add review to restaurant`}
          onCancel={onClose}
          footer={[
            <Button key="close" type="primary" onClick={onClose}>
              Close
            </Button>,
          ]}
        >
          <AddReviewForm />
        </Modal>
      </>
    )
  }
}

const mapStateToProps = state => ({
  isVisible: state.reviewForm.isVisible,
})

const mapDispatchToProps = dispatch => ({
  onClose: () => dispatch(hideReviewForm()),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddReviewModal)
