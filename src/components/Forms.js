import React, { useState, useEffect } from "react";
import { Modal, Form, Col, Row, Input, Select, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { postNewChore, postNewChild, postNewFamily, editChore } from "../store/actions";
import Moment from "moment";
import { OmitProps } from "antd/lib/transfer/renderListBody";
import Chore from "./Chore";
const { Option } = Select;

const Forms = ({
  form,
  visible,
  setVisible,
  target,
  setTarget,
  editing,
  editItem,
  setEditItem,
  setEditing
}) => {
  // const [visible, setVisible] = useState(false);
  const [newItem, setNewItem] = useState();
  const { getFieldDecorator, validateFields, setFieldsValue } = form;
  const dispatch = useDispatch();

  const families = useSelector(state => state.families.families);
  const children = useSelector(state => state.children.children);

  const onClose = () => {
    setVisible(false);
  };
  const handleSubmit = e => {
    e.preventDefault();
    validateFields((err, values) => {
      if (!err) {
        if (target === "Child") {
          const mactchingFamily = families.find(
            family => family.surname === values.family
          );
          const ID = mactchingFamily.id;
          setNewItem({ name: values.name, familyId: ID });
          setFieldsValue({});
          setVisible(false);
        }

        if (target === "Family") {
          setNewItem(values);
          setFieldsValue({});
          setVisible(false);
        }

        if (target === "Chore") {
          const date = Moment(new Date(values.duedate["_d"])).format(
            "YYYY-MM-DD"
          );
          const matchingChild = children.find(
            child => child.name === values.name
          );
          const ID = matchingChild.id;
          setNewItem({
            title: values.title,
            child_id: ID,
            description: values.description,
            // childMarkComplete: false,
            // parentMarkComplete: false,
            duedate: date
          });
          setFieldsValue({});
          setVisible(false);
          
        }
      }
    });
  };

  useEffect(
    function() {
      if (target === "Chore") {
        if (!editing) {
          setTarget("");
          dispatch(postNewChore(newItem));
        }
        dispatch((editChore(editItem.id, newItem)))
        setEditing(false);
        setEditItem(null);
      }
      if (target === "Child") {
        console.log(newItem);
        setTarget("");
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
          okText="Submit"
          title="Create a new chore"
          width={800}
        >
          <Form layout="vertical" hideRequiredMark onSubmit={handleSubmit}>
            <Row gutter={16}>
              <Col span={24}>
                <Form.Item label="Title">
                  {getFieldDecorator("title", {
                    initialValue: editing && editItem.title,
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
                  {getFieldDecorator("name", {
                    rules: [
                      {
                        required: true,
                        message: "Please select at least one owner"
                      }
                    ]
                  })(
                    <Select placeholder="Please select the child who owns this chore">
                      {children.map(child => (
                        <Option
                          value={child.name}
                          key={Math.random() * Math.random()}
                        >
                          {child.name}
                        </Option>
                      ))}
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
                    initialValue: editing && editItem.description,
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
          okText="Submit"
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
          title="Create a new child profile"
          okText="Submit"
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
              <Col span={24}>
                <Form.Item label="Child's Family">
                  {getFieldDecorator("family", {
                    rules: [
                      {
                        required: true,
                        message: "Please choose the family of the child"
                      }
                    ]
                  })(
                    <Select placeholder="Please choose the family of the child">
                      {families.map(family => (
                        <Option
                          value={family.surname}
                          key={Math.random() * Math.random()}
                        >
                          The {family.surname}s
                        </Option>
                      ))}
                    </Select>
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
