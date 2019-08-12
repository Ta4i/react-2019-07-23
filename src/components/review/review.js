import React, {Component} from 'react'
import {Comment, Rate, List} from 'antd'
import {connect} from 'react-redux'
import {selectReview, selectUserByReviewId} from '../../store/selectors'

class Review extends Component {
  render() {
    const {review, user} = this.props
    return (
      <List.Item data-autoid="REVIEW">
        <Comment
          style={{
            margin: '16px',
            backgroundColor: 'white',
          }}
          author={[
            user.name,
            <Rate
              key={review.id}
              disabled
              defaultValue={review.rating}
              style={{marginLeft: '24px'}}
            />,
          ]}
          content={review.text}
        />
      </List.Item>
    )
  }
}

export default connect((state, ownProps) => {
  return {
    review: selectReview(state, ownProps),
    user: selectUserByReviewId(state, ownProps),
  }
})(Review)
