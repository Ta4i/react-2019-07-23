import React from 'react'
import {Comment, Rate, List} from 'antd'
import {selectReview} from '../../store/selectors'
import {connect, useSelector} from 'react-redux'

function Review({review}) {
  //const cart = useSelector(selectReview)
  console.log('review', review)

  //console.log('review',cart);

  return (
    <List.Item data-autoid="REVIEW">
      <Comment
        style={{
          margin: '16px',
          backgroundColor: 'white',
        }}
        author={[
          review.name,
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

export default connect((state, ownProps) => ({
  review: selectReview(state, ownProps),
}))(Review)
