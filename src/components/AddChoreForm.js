import React, { useState, useEffect } from "react";
import {
  Modal,
  Form,
  Button,
  Col,
  Row,
  Input,
  Select,
  DatePicker,
  Icon
} from "antd";
import { useDispatch } from 'react-redux'
import { postNewChore } from '../store/actions'
const { Option } = Select;

const AddChore = ({ form }) => {
  const [visible, setVisible] = useState(false);
  const [newChore, setNewChore] = useState({});
  const { getFieldDecorator, validateFields, setFieldsValue } = form;
  const dispatch = useDispatch();

  const showModal = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        setNewChore(values);
        setFieldsValue({
          title: "",
          child: null,
          duedate: null,
          description: ""
        });
        setVisible(false);
      }
    });
  };
  useEffect(() => dispatch(postNewChore(newChore)), [newChore, dispatch]);

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        <Icon type="plus" /> New Chore
      </Button>

      <Modal visible={visible} onCancel = {onClose} onOk = {handleSubmit} title="Create a new chore" width={800}>
        <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Title">
                {getFieldDecorator("title", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter the title of the chore"
                    }
                  ]
                })(<Input placeholder="Please enter the title of the chore" />)}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Child">
                {getFieldDecorator("child", {
                  rules: [
                    {
                      required: true,
                      message: "Please select at least one owner",
                      type: "array"
                    }
                  ]
                })(
                  <Select
                    placeholder="Please select the chore owner(s)"
                    mode="multiple"
                  >
                    <Option value="jerry">Jerry</Option>
                    <Option value="lisa">Lisa</Option>
                    <Option value="james">James</Option>
                    <Option value="jayne">Jayne</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item label="Category">
                {getFieldDecorator("category", {
                  rules: [
                    {
                      required: true,
                      message: "Please choose the chore category"
                    }
                  ]
                })(
                  <Select placeholder="Please choose the chore category">
                    <Option value="communal">Communal</Option>
                    <Option value="kitchen">Kitchen</Option>
                    <Option value="garden">Garden</Option>
                    <Option value="bedroom">Bedroom</Option>
                  </Select>
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item label="Due Date">
                {getFieldDecorator("duedate", {
                  rules: [
                    { required: true, message: "Please choose the dateTime" }
                  ]
                })(
                  <DatePicker
                    style={{ width: "100%" }}
                    getPopupContainer={trigger => trigger.parentNode}
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item label="Description">
                {getFieldDecorator("description", {
                  rules: [
                    {
                      required: true,
                      message: "Please enter the chore description"
                    }
                  ]
                })(
                  <Input.TextArea
                    rows={3}
                    placeholder="Please enter the chore description"
                  />
                )}
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </div>
  );
};
export default Form.create()(AddChore);
