import React, {PureComponent} from 'react'
import {Comment, Rate, List} from 'antd'
import {connect} from 'react-redux'
import {selectReview} from '../../store/selectors'

class Review extends PureComponent {
  render() {
    const {review, id} = this.props
    console.log(review)
    return (
      <List.Item data-autoid="REVIEW">
        <Comment
          style={{
            margin: '16px',
            backgroundColor: 'white',
          }}
          author={[
            review.user.name,
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

const mapStateToProps = (state, ownProps) => ({
  review: selectReview(state, ownProps),
})

export default connect(mapStateToProps)(Review)
