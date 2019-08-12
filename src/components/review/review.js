import React, {PureComponent} from 'react'
import {Comment, Rate, List} from 'antd'
import {connect} from 'react-redux'
import {selectReview} from '../../store/selectors'

class Review extends PureComponent {
  render() {
    const {review, id} = this.props
    return (
      <List.Item data-autoid="REVIEW">
        <Comment
          style={{
            margin: '16px',
            backgroundColor: 'white',
          }}
          author={[
            review.user,
            <Rate
              key={id}
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

export default connect((state, ownProps) => ({
  ...selectReview(state, ownProps),
}))(Review)
