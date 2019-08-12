import React, {Component} from 'react'
import {Rate} from 'antd'
import {connect} from 'react-redux'
import {addReview} from '../../store/ac'

class AddReview extends Component {
  render() {
    const {restaurantId, dispatch} = this.props
    return (
      <div>
        <div>
          <h4>Name</h4>
          <input type="text" ref={this.setUserNameInput}></input>
        </div>
        <div>
          <h4>Text</h4>
          <input type="text" ref={this.setUserTextInput}></input>
        </div>
        <Rate ref={this.setUserRatingInput}></Rate>

        <button
          onClick={() => {
            dispatch(
              addReview(
                this.userNameInput.value,
                this.userTextInput.value,
                2,
                restaurantId
              )
            )
          }}
        >
          Send
        </button>
      </div>
    )
  }

  setUserNameInput = ref => {
    this.userNameInput = ref
  }

  setUserTextInput = ref => {
    this.userTextInput = ref
  }

  setUserRatingInput = ref => {
    {
      this.userRatingInput = ref
    }
  }
}

export default connect()(AddReview)
