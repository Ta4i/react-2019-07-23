import React, {Component} from 'react'
import {Menu, Dropdown, Button} from 'antd'

class Language extends Component {
  handleClick = lang => {
    this.props.click(lang)
  }

  render() {
    const menu = (
      <Menu>
        <Menu.Item>
          <button type="button" onClick={() => this.handleClick('ru')}>
            Ru
          </button>
        </Menu.Item>
        <Menu.Item>
          <button type="button" onClick={() => this.handleClick('eng')}>
            Eng
          </button>
        </Menu.Item>
      </Menu>
    )

    return (
      <Dropdown overlay={menu} placement="bottomLeft">
        <Button>bottomLeft</Button>
      </Dropdown>
    )
  }
}

export default Language
