import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row, Input, Select, DatePicker } from "antd";
import { useDispatch } from "react-redux";
import { postNewChore, postNewChild, postNewFamily } from "../store/actions";
const { Option } = Select;

const Forms = ({
  form,
  visible,
  setVisible,
  target,
  setTarget,
  handleMenu
}) => {
  // const [visible, setVisible] = useState(false);
  const [newItem, setNewItem] = useState({});
  const { getFieldDecorator, validateFields, setFieldsValue } = form;
  const dispatch = useDispatch();

  const onClose = () => {
    setVisible(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        setNewItem(values);
        setFieldsValue({});
        setVisible(false);
      }
    });
  };

  useEffect(
    function() {
      if (target === "Chore") {
        setTarget("");
        return dispatch(postNewChore(newItem));
      }
      if (target === "Child") {
        setTarget("");
        console.log(newItem);
        return dispatch(postNewChild(newItem));
        
      }
      if (target === "Family") {
        setTarget("");
        console.log(newItem);
        dispatch(postNewFamily(newItem));
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [newItem]
  );

  if (target === "Chore") {
    return (
      <div>
        <Modal
          visible={visible}
          onCancel={onClose}
          onOk={handleSubmit}
          okText = "Submit"
          title="Create a new chore"
          width={800}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Title">
                  {getFieldDecorator("title", {
                    rules: [
                      {
                        required: true,
                        message: "Please enter the name of your family"
                      }
                    ]
                  })(
                    <Input placeholder="Please enter the name of your family" />
                  )}
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
                      placeholder="Please select the child who owns this chore"
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
  }

  if (target === "Family") {
    return (
      <div>
        <Modal
          visible={visible}
          onCancel={onClose}
          onOk={handleSubmit}
          title="Create a new family"
          okText = "Submit"
          width={600}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Surname">
                  {getFieldDecorator("surname", {
                    rules: [
                      {
                        required: true,
                        message: "Please enter the name of your family"
                      }
                    ]
                  })(
                    <Input placeholder="Please enter the name of your family" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }

  if (target === "Child") {
    return (
      <div>
        <Modal
          visible={visible}
          onCancel={onClose}
          onOk={handleSubmit}
          title="Create a new child account"
          okText = "Submit"
          width={600}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Name">
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "Please enter the name of your child"
                      }
                    ]
                  })(
                    <Input placeholder="Please enter the name of your child" />
                  )}
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    );
  }
  return null;
};
export default Form.create()(Forms);
