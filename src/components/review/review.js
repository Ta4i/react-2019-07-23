import React, {Component} from 'react'
import {Comment, Rate, List} from 'antd'
import {connect} from 'react-redux'
import {selectReview, selectUser} from '../../store/selectors'

class Review extends Component {
  render() {
    const {id, review, user} = this.props

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
  review: selectReview(state, ownProps),
  user: selectUser(state, ownProps),
}))(Review)
