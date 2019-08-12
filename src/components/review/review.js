import React from 'react'
import {connect} from 'react-redux'
import {Comment, Rate, List} from 'antd'
import {selectUsers} from '../../store/selectors'

function Review({review, users}) {
  const [user] = users.filter(elem => elem.id === review.userId)
  const name = user !== undefined ? user.name : undefined
  return (
    <List.Item data-autoid="REVIEW">
      <Comment
        style={{
          margin: '16px',
          backgroundColor: 'white',
        }}
        author={[
          name,
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

export default connect(state => ({
  users: selectUsers(state),
}))(Review)
