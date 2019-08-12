import React from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css'
import './index.css'
import {Button, Modal, Form, Input, Radio, Rate} from 'antd'
import {addReview} from '../../store/ac'

const CollectionCreateForm = Form.create({name: 'form_in_modal'})(
  // eslint-disable-next-line
  class extends React.Component {
    render() {
      const {visible, onCancel, onCreate, form} = this.props
      const {getFieldDecorator} = form
      return (
        <Modal
          visible={visible}
          title="Add a new review"
          okText="Add"
          onCancel={onCancel}
          onOk={onCreate}
        >
          <Form layout="vertical">
            <Form.Item label="Имя">
              {getFieldDecorator('name', {
                rules: [{required: true, message: 'Пожалуйста, введите имя!'}],
              })(<Input />)}
            </Form.Item>
            <Form.Item label="Отзыв">
              {getFieldDecorator('reviewText', {
                rules: [
                  {required: true, message: 'Пожалуйста, введите Ваш отзыв!'},
                ],
              })(<Input type="textarea" />)}
            </Form.Item>
            <Form.Item
              label="Оценка"
              className="collection-create-form_last-form-item"
            >
              {getFieldDecorator('rating', {
                initialValue: 5,
              })(<Rate allowHalf />)}
            </Form.Item>
          </Form>
        </Modal>
      )
    }
  }
)

class ModalAddReview extends React.Component {
  state = {
    visible: false,
  }

  showModal = () => {
    this.setState({visible: true})
  }

  handleCancel = () => {
    this.setState({visible: false})
  }

  handleCreate = () => {
    const {form} = this.formRef.props
    form.validateFields((err, values) => {
      if (err) {
        return
      }

      // console.log('Received values of form: ', values);
      // console.log('state', this.state);

      values['restaurantId'] = this.props.restaurantId

      // console.log(this.props.addReview);

      this.props.addReview(values)
      form.resetFields()
      this.setState({visible: false})
    })
  }

  saveFormRef = formRef => {
    this.formRef = formRef
  }

  render() {
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          Добавить отзыв
        </Button>
        <CollectionCreateForm
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
        />
      </div>
    )
  }
}

export default connect(
  values => ({
    ...values,
  }),
  {
    addReview,
  }
)(ModalAddReview)
