import React, { useState } from "react";
import { Modal, Form, Input, Button } from "antd";

const layout = {
	labelCol: {
		span: 8,
	},
	wrapperCol: {
		span: 16,
	},
};
const tailLayout = {
	wrapperCol: {
		offset: 8,
		span: 16,
	},
};

function Setting() {
	const [visible, setVisible] = useState(false);
	const [form] = Form.useForm();

	const onFinish = (values) => {
		console.log("Success:", values);
		setVisible(false);
		form.resetFields(); // clear form fields
	};

	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	return (
		<div>
			<Button type="primary" onClick={() => setVisible(true)}>
				Open Modal
			</Button>
			<Modal open={visible} onCancel={() => setVisible(false)} footer={null}>
				<Form
					{...layout}
					form={form}
					name="example-form"
					onFinish={onFinish}
					onFinishFailed={onFinishFailed}
				>
					<Form.Item
						label="Name"
						name="name"
						rules={[
							{
								required: true,
								message: "Please input your name!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item
						label="Email"
						name="email"
						rules={[
							{
								required: true,
								message: "Please input your email!",
							},
						]}
					>
						<Input />
					</Form.Item>

					<Form.Item {...tailLayout}>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
					</Form.Item>
				</Form>
			</Modal>
		</div>
	);
}

export default Setting;
