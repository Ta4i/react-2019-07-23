import React, { Component } from "react";
import { List, Avatar, Rate } from "antd";

class ListReviews extends Component {
  renderItem = item => {
    return (
      <List.Item>
        <List.Item.Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title={item.user}
          description={item.text}
        />
        <Rate allowHalf disabled defaultValue={item.rating} />
      </List.Item>
    );
  };
  render() {
    const { reviews } = this.props;

    return (
      <List
        itemLayout="horizontal"
        dataSource={reviews}
        renderItem={this.renderItem}
      />
    );
  }
}

export default ListReviews;
