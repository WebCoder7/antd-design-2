import React from "react";
import { Modal, Form, Input, Button } from "antd";

const AddDataModal = ({ visible, onClose, onAdd }) => {
    const [form] = Form.useForm();

    const handleFinish = (values) => {
        onAdd(values);
        form.resetFields();
    };

    return (
        <Modal
            title="Yangi Malumot Qoshish"
            visible={visible}
            onCancel={onClose}
            footer={null}
        >
            <Form
                form={form}
                layout="vertical"
                onFinish={handleFinish}
            >
                <Form.Item
                    name="name"
                    label="Ism"
                    rules={[
                        { required: true, message: "Iltimos, ismni kiriting" },
                        { min: 3, message: "Ismi kamida 3 ta belgidan iborat bolishi kerak" },
                    ]}
                >
                    <Input placeholder="Ismni kiriting" />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: "Iltimos, emailni kiriting" },
                        { type: "email", message: "Togri email kiriting" },
                    ]}
                >
                    <Input placeholder="Emailni kiriting" />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" style={{ width: "100%" }}>
                        Saqlash
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default AddDataModal;
